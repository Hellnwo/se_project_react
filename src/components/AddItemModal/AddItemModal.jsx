import { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm"

export default function AddItemModal( { onClose, isOpen, onAddItemModalSubmit} ) {
    const [name, setName] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [weather, setWeather] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlImageUrlChange = (e) => {
        setimageUrl(e.target.value);
    };

    const handleWeatherChange = (e) => {
        setWeather(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItemModalSubmit({name, imageUrl, weather});
        setName("");
        setWeather("");
        setimageUrl("");
    }

    return (
         <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        onClose={onClose}
        isOpen={isOpen}
        handleSubmit={handleSubmit}
      >
        <label htmlFor="name" className="modal__label">
          Name{""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
            required
            minLength="1"
            maxLength="30"
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{""}
          <input
            type="text"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
            required
            onChange={handlImageUrlChange}
            value={imageUrl}
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              name="choice"
              className="modal__radio-input"
              required
              onChange={handleWeatherChange}
              value="hot"
              checked={weather === "hot"}
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              name="choice"
              className="modal__radio-input"
              onChange={handleWeatherChange}
              value="warm"
              checked={weather === "warm"}
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              name="choice"
              className="modal__radio-input"
              onChange={handleWeatherChange}
              value="cold"
              checked={weather === "cold"}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    )
}