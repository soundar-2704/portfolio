import Layout from "@/components/Layout";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsTelephoneInbound } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import "animate.css";


function contac() {
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = inputdata;
  const [validator, setValidator] = useState(false);

  const Handlesubmit = () => {
    if ((name !== "" && email !== "", subject !== "", message !== "")) {
      setValidator(false);
      setInputdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      console.log(inputdata);
    } else {
      setValidator(true);
    }
  };

  return (
    <>
      <Layout>
        <Stack
          sx={{
           //bgcolor:'red',

            display: "flex",
            width: "98%",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            justifyContent: "space-around",
          }}
        >
          <Box
            gap={3}
            sx={{
              //bgcolor:'yellow',
              display: "flex",
              flexDirection: "column",
              padding: {
                xl: "10px 0 10px 0",
                lg: "10px 0 10px 0",
                md: "20px 0 10px 20px",
                sm: "20px 0 10px 20px",
                xs: "20px 0 10px 20px",
              },
            }}
          >
            <Typography
              className="animate__animated animate__zoomIn"
              sx={{ color: "#b3b3b3", fontSize: "25px" }}
            >
              Contact Info
            </Typography>

            {/* start stack 1 */}
            <Box
              gap={4}
              sx={{ display: "flex", flexDirection: "column" }}
              className="animate__animated animate__slideInLeft"
            >
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <MdOutlineMailOutline />
                </Box>
                <Box sx={{ color: "#fff" }}>
                  <Typography color="#4d4d4d" fontWeight="bold">
                    MAIL US
                  </Typography>
                  <Typography>soundarrajan2704@gmail.com</Typography>
                </Box>
              </Stack>
              {/* end stack 1 */}

              {/* start stack 2 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <BsTelephoneInbound />
                </Box>
                <Box sx={{ color: "#fff" }}>
                  <Typography color="#4d4d4d" fontWeight="bold">
                    CONTACT US
                  </Typography>
                  <Typography>+91 9597117742</Typography>
                </Box>
              </Stack>
              {/* end stack 2 */}

              {/* start stack 3 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <GoLocation />
                </Box>
                <Box sx={{ color: "#fff" }}>
                  <Typography color="#4d4d4d" fontWeight="bold">
                    LOCATION
                  </Typography>
                  <Typography>RTO office road</Typography>
                  <Typography>Pappanaikanpalayam</Typography>
                </Box>
              </Stack>
            </Box>
            {/* end stack 3 */}

            {/* Social Info Start */}
            <Stack gap={3} sx={{ flexDirection: "column" }}>
              <Typography
                className="animate__animated animate__zoomIn"
                sx={{ color: "#b3b3b3", fontSize: "25px" }}
              >
                Social Info
              </Typography>
              <Stack
                gap={4}
                sx={{
                  flexDirection: "row",
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "300px",
                  },
                  justifyContent: "space-around",
                  padding:'0 0 0 20px'
                }}
                className="animate__animated animate__slideInLeft"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <BsWhatsapp />
                  <Typography><a target="_blank" style={{color:"#fff", textDecoration:"none",}} href="https://web.whatsapp.com/">Whatsapp</a></Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <BsInstagram />
                  <Typography><a target="_blank" style={{color:"#fff", textDecoration:"none",}} href="https://www.instagram.com/accounts/login/">Instagram</a></Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <SiLinkedin />
                  <Typography><a target="_blank" style={{color:"#fff", textDecoration:"none",}} href="https://www.linkedin.com/uas/login-submit">Linkedin</a></Typography>
                </Box>
              </Stack>
            </Stack>
            {/* Social Info end */}
          </Box>

          <Stack
            className="animate__animated animate__zoomIn"
            sx={{
              width: {
                xl: "600px",
                lg: "600px",
                md: "90%",
                sm: "90%",
                xs: "90%",
              },
              backgroundImage:
                "linear-gradient(to right bottom,#d9d9d9,#cccccc)",
              color: "#6699ff",
              borderRadius: "20px",
              margin: {
                xl: "10px 0 10px 0",
                lg: "10px 0 10px 0",
                md: "20px 0 10px 20px",
                sm: "20px 0 10px 20px",
                xs: "20px 0 10px 20px",
              },
              justifyContent:'space-around'
            }}
          >
            <Typography
              sx={{
                //bgcolor:'yellowgreen',
                display: "flex",
                flexDirection: "row",
                fontSize: "30px",
                fontSize: {
                  xl: "30px",
                  lg: "30px",
                  md: "30px",
                  sm: "25px",
                  xs: "25px",
                },
                fontWeight: "bold",
                textAlign: "center",
                width: "90%",
                padding: "20px",
                color: "#000000",
              }}
            >
              Let's Start With
              <span style={{ color: "#4d79ff" }}>Together.</span>
            </Typography>
            {validator && (
              <Typography sx={{ color: "#ff0000", fontSize: "20px", padding:'0 0 0 30px' }}>
                * All fields are mandatory
              </Typography>
            )}
            <Box
              gap={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0 30px 30px 30px",
                color: "#fff",
              }}
            >
              <TextField
                sx={{ color: "#fff" }}
                id="outlined"
                variant="standard"
                label="Name"
                value={name}
                onChange={(e) => {setInputdata({...inputdata,name:e.target.value})}}
              />
              <TextField
                id="outlined-controlled"
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => {setInputdata({...inputdata,email:e.target.value})}}
              />
              <TextField
                id="outlined-controlled"
                variant="standard"
                label="Subject"
                value={subject}
                onChange={(e) => {setInputdata({...inputdata,subject:e.target.value})}}
              />
              <TextField
                id="outlined-controlled"
                variant="standard"
                label="Message"
                value={message}
                onChange={(e) => {setInputdata({...inputdata,message:e.target.value})}}
              />
              <Button
                variant="contained"
              sx={{
                borderRadius: "0px",
                textAlign: "center",
                transition:'0.3s',
                "&:hover":{
                    backgroundColor:'#fff',
                    color:'black',
                    borderRadius: "10px",
                }
              }}
                onClick={() => {
                  Handlesubmit();
                }}
              >
                send message
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export default contac;
