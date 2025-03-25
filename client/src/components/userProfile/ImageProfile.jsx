import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-hot-toast";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import {
  userImageUpload,
  userReset,
} from "../../features/authencation/authSlice";

const ImageProfile = () => {
  const [open, setOpen] = useState();
  const [image, setImage] = useState(null);
  const [buttonable, setButtonable] = useState(true);
  const [imageloading, setImageloading] = useState(false);
  //this is used to open the model
  const [previewimage, setPreviewImage] = useState(null);
  const { user, userLoading, userSuccess, userMessage, userError } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleImageProfile = () => {
    setOpen(true);
  };

  const imageHandleChange = (e) => {
    const file = e.target.files[0];

    const imageURL = URL.createObjectURL(file);
    if (file.type.startsWith("image")) {
      setPreviewImage(imageURL);
      setButtonable(false);
      setImage(file);
    } else {
      toast.error("select the image");
      setButtonable(true);
    }
  };
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "image123");

    try {
      setImageloading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dftpffw1i/image/upload",
        data
      );

      setPreviewImage(null);
      setButtonable(true);
      setImageloading(false);
      toast.success("Image uploaded successfully");
      setOpen(false);
      return response.data.secure_url;
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed");
    }
  };

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    dispatch(userReset());
  }, [userError]);

  const handleImageUpload = async () => {
    const uploadUrl = await uploadImage(image);
    const imageData = {
      user_id: user?._id,
      myImage: uploadUrl,
    };
    dispatch(userImageUpload(imageData));
  };

  return (
    <>
      {user?.image ? (
        <>
          <img
            onClick={handleImageProfile}
            src={user?.image}
            className="rounded-full w-11 mt-1 h-11 bg-amber-50 cursor-pointer"
            alt="Profile"
          />
        </>
      ) : (
        <>
          <img
            onClick={handleImageProfile}
            src="https://w7.pngwing.com/pngs/146/551/png-transparent-user-login-mobile-phones-password-user-miscellaneous-blue-text-thumbnail.png"
            className="rounded-full w-11 mt-1 h-11 bg-amber-50 cursor-pointer"
            alt="Profile"
          />
        </>
      )}
      {/* <img
        onClick={handleImageProfile}
        src="https://w7.pngwing.com/pngs/146/551/png-transparent-user-login-mobile-phones-password-user-miscellaneous-blue-text-thumbnail.png"
        className="rounded-full w-11 mt-1 h-11 bg-amber-50 cursor-pointer"
        alt="Profile"
      /> */}

      {open && (
        <div className="fixed inset-0 flex items-center justify-center  bg-gray-500 opacity-80">
          <div className=" bg-white border-black border p-6 rounded-lg shadow-lg w-96">
            {previewimage ? (
              <>
                <img
                  src={previewimage}
                  className="w-40 h-40 mx-auto mt-12 rounded-full "
                />
                <IoIosAddCircle
                  size={30}
                  className=" relative right-40 left-48 -top-13  "
                />
                <input
                  onChange={imageHandleChange}
                  type="file"
                  className="relative right-40 left-20 opacity-0 -top-20 "
                ></input>
              </>
            ) : (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png "
                  className="w-40 h-40 mx-auto mt-12 rounded-full "
                />
                <IoIosAddCircle
                  size={30}
                  className=" relative right-40 left-48 -top-13  "
                />
                <input
                  onChange={imageHandleChange}
                  type="file"
                  className="relative right-40 left-20 opacity-0 -top-20 "
                ></input>
              </>
            )}
            <button
              onClick={handleImageUpload}
              disabled={buttonable}
              className={`rounded  px-8 py-2 ${
                buttonable ? "bg-gray-400" : "bg-blue-700"
              }`}
              style={{ marginLeft: "auto", display: "block" }}
            >
              {imageloading ? (
                <Oval
                  visible={true}
                  height="30"
                  width="30"
                  color="#F0F0F0"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                <AiOutlineSend size={28} />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageProfile;
