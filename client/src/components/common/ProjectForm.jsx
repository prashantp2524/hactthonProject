// import { LoadingButton } from "@mui/lab";
// import { Alert, Box, Button, Stack, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import * as Yup from "yup";
// // import userApi from "../../api/modules/user.api";
// // import { setAuthModalOpen } from "../../redux/features/authModalSlice";
// // import { setUser } from "../../redux/features/userSlice";

// const ProjectForm = ({ switchAuthState }) =>
// {
//     const dispatch = useDispatch();

//     const [isLoginRequest, setIsLoginRequest] = useState(false);
//     const [errorMessage, setErrorMessage] = useState();
//     const [file, setFile] = useState()
//     const projectForm = useFormik({
//         initialValues: {
//             projecttitle: "",
//             learninghr: "",
//             module: "",
//         }
//     });

//     const onUpload = async (e) =>
//     {

//     }

//     onSubmit: async values =>
//     {
//         setErrorMessage(undefined);
//         console.log("asdasdasdasd");


//         if (response)
//         {
//             projectForm.resetForm();
//             dispatch(setAuthModalOpen(false));
//             toast.success("Uploaded successfully");
//         }

//         if (err) setErrorMessage(err.message);
//     }
// };

// return (
//     <Box component="form" onSubmit={projectForm.handleSubmit}>
//         <Stack spacing={3}>
//             <TextField
//                 type="text"
//                 placeholder="projecttitle"
//                 name="projecttitle"
//                 fullWidth
//                 value={projectForm.values.projecttitle}
//                 onChange={projectForm.handleChange}
//                 color="success"
//                 error={projectForm.touched.projecttitle && projectForm.errors.projecttitle !== undefined}
//                 helperText={projetForm.touched.projecttitle && projectForm.errors.projecttitle}
//             />
//             <TextField
//                 type="text"
//                 placeholder="module"
//                 name="module"
//                 fullWidth
//                 value={projectForm.values.module}
//                 onChange={projectForm.handleChange}
//                 color="success"
//                 error={projectForm.touched.module && projectForm.errors.module !== undefined}
//                 helperText={projectForm.touched.module && projectForm.errors.module}
//             />
//             <TextField
//                 type="text"
//                 placeholder="learning hour"
//                 name=" learninghr"
//                 fullWidth
//                 value={projectForm.values.learninghr}
//                 onChange={projectForm.handleChange}
//                 color="success"
//                 error={projectForm.touched.learninghr && projectForm.errors.learninghr !== undefined}
//                 helperText={projectForm.touched.learninghr && projectForm.errors.learninghr}
//             />
//             <TextField
//                 type="file"
//                 placeholder="confirm password"
//                 name="confirmPassword"
//                 fullWidth
//                 accept=".zip"
//                 // value={projectForm.values.confirmPassword}
//                 onChange={handleFileReader}
//                 color="success"
//             // error={projectForm.touched.confirmPassword && projectForm.errors.confirmPassword !== undefined}
//             // helperText={projectForm.touched.confirmPassword && projectForm.errors.confirmPassword}
//             />
//         </Stack>


//         <Button
//             fullWidth
//             sx={{ marginTop: 1 }}
//             onClick={uploadHandler}
//         >
//             Upload Folder
//         </Button>

//         {errorMessage && (
//             <Box sx={{ marginTop: 2 }}>
//                 <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
//             </Box>
//         )}
//     </Box>
// );
// };

// export default ProjectForm;