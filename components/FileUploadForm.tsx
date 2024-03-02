// "use client";

// import React, { useState } from "react";

// const FileUploadForm = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLImageElement> | undefined
//   ) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       alert("Please select a file");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       const response = await fetch("http://localhost:3000/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("File uploaded successfully:", data);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>File Upload</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default FileUploadForm;
