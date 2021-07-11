import React from "react";
import ItemImagePreview from "./ItemImagePreview/ItemImagePreview";

function ModalImage(props) {
  //
  const { imagePreview, setImagePreview } = props;

  const showAllImagePreview = imagePreview.map((item, index) => {
    return (
      <ItemImagePreview
        item={item}
        key={index}
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
        index={index}
      />
    );
  });

  const onChange = (event) => {
    let imagePreviews = [...imagePreview];
    let files = event.target.files;
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      imagePreviews.push(element);
    }
    setImagePreview(imagePreviews);
  };

  return (
    <div
      className="absolute rounded-2xl z-50 bg-white dark:bg-dark-second"
      style={{ bottom: "100%", width: "500px" }}
    >
      <ul className="flex p-2 overflow-x-auto" style={{ maxWidth: "500px" }}>
        {showAllImagePreview}
        <li
          className="w-20 h-20 rounded-lg text-center flex justify-center  
          mr-2 bg-gray-300 flex-shrink-0 dark:bg-dark-third"
        >
          <input
            onChange={onChange}
            type="file"
            name="fileImageAdd[]"
            className="hidden"
            multiple="multiple"
            id="fileImageChatMainAdd"
          />
          <label htmlFor="fileImageChatMainAdd" className="flex items-center">
            <i className="fas fa-file-image text-2xl dark:text-white flex items-center"></i>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default ModalImage;
