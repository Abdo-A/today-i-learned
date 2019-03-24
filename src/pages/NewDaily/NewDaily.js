import CreatableSelect from 'react-select/lib/Creatable';
import React, { useState } from 'react';
import ReactFilestack from 'filestack-react';

import keys from '../../RNkeys.ignore';

const NewDaily = (props) => {
  const [newDaily, setNewDaily] = useState({
    date: new Date(),
    body: '',
    tags: [],
    private: false,
    imageUrls: []
  });

  const onChangeInput = (name, value) => {
    setNewDaily({ ...newDaily, [name]: value });
  };

  const onSubmit = () => {
    console.log(newDaily);
  };

  const onImageUpload = (result) => {
    console.log(result.filesUploaded[0].url);

    const newImageUrls = [...newDaily.imageUrls];

    newImageUrls.push(result.filesUploaded[0].url);

    setNewDaily({ ...newDaily, imageUrls: newImageUrls });
  };

  const onError = (error) => {
    alert('Error uploading photo', error);
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="form-group">
          <div className="alert alert-primary" role="alert">
            {new Date().toDateString()}
          </div>

          <div className="mt-4 mb-4">
            <CreatableSelect
              isClearable
              isMulti
              noOptionsMessage={() => 'No more tags'}
              placeholder="Set tags"
              onChange={(choices) =>
                onChangeInput('tags', choices.map((choice) => choice.value))
              }
              defaultValue={[]}
              options={[{ label: 3, value: 3 }, { label: 4, value: 4 }]}
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={(e) => onChangeInput('body', e.target.value)}
              id="textarea"
              placeholder="What did you learn today, Abdo?"
              rows="20"
              className="form-control"
            />
          </div>

          {newDaily.imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              alt="Daily"
              className="rounded img-thumbnail mx-auto d-block w-75 mt-4 mb-4"
            />
          ))}

          <div className="text-center">
            <ReactFilestack
              apikey={keys.filestackKey[Math.round(Math.random())]}
              buttonText="Upload a photo"
              buttonClass="ui medium button gray"
              onSuccess={onImageUpload}
              onError={onError}
            />
          </div>

          <div className="form-check">
            <input
              onChange={(e) => onChangeInput('private', e.target.checked)}
              type="checkbox"
              id="chickens"
              className="form-check-input"
            />
            <label htmlFor="chickens" className="form-check-label">
              Private
            </label>
          </div>

          <div className="text-center">
            <button onClick={onSubmit} className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewDaily.propTypes = {};

export default NewDaily;
