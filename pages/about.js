import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import "animate.css";

function About() {
  return (
    <>
      <Layout>
        {" "}
        {/* start stack 1 */}
        <Stack
          flex={1}
          gap={3}
          sx={{
            padding: {
              xl: "30px 60px 0 60px",
              lg: "30px 60px 0 60px",
              md: "30px 20px 0 20px",
              sm: "30px 20px 0 20px",
              xs: "30px 20px 0 20px",
            },
          }}
        >
          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Stack
              flex={1}
              sx={{
                width: {
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                alignItems: "center",
              }}
            >
              <Box
                className="animate__animated animate__fadeInLeft"
                sx={{
                  alignItems: "center",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <Image
                  alt="green iguana"
                  src={require("../public/soundar.jpg")}
                  width="250"
                  height="270"
                  style={{
                    borderRadius: "10px",
                    alignItems: "center",
                  }}
                />
              </Box>
            </Stack>

            <Stack flex={3} gap={3} sx={{ flexDirection: "column" }}>
              <Box
                className="animate__animated animate__flipInY"
                gap={3}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Image
                  alt="image"
                  src={require("../public/R.png")}
                  height="60"
                  width="60"
                  sx={{
                    borderRadius: "15px",
                    padding: "10px",
                    color: "#fff",
                  }}
                />
                <Typography
                  className="portfoliolineargradient"
                  sx={{
                    fontSize: {
                      xl: "70px",
                      lg: "70px",
                      md: "70px",
                      sm: "30px",
                      xs: "30px",
                    },
                    fontWeight: "bold",
                    color: "#bfbfbf",
                    fontFamily: "serif",
                  }}
                >
                  SELF-SUMMARY
                </Typography>
                <Image
                  alt="image"
                  src={require("../public/R.png")}
                  height="60"
                  width="60"
                  sx={{
                    borderRadius: "15px",
                    padding: "10px",
                  }}
                />
              </Box>
              <Box
                className="animate__animated animate__zoomIn"
                sx={{
                  backgroundColor: "#262626",
                  padding: "20px",
                  borderRadius: "20px",
                  border: "1px #595959 solid",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                  SoundarRajan.k
                </Typography>
                <Typography sx={{ fontSize: "20px", color: " #a6a6a6" }}>
                  D.M.E diploma mechanical engineering
                </Typography>
                <Typography sx={{ fontSize: "16px", color: " #a6a6a6" }}>
                  As a frontend and backend developer, my objective is to make a positive impact
                  on clients, co-workers, and the Internet using my skills and
                  experience to developer compelling and attractive websites.
                  Solving code problems.  with devlopers team in
                  the company to build perfect web developer.
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* end stack 1 */}

          {/*start stack 2 */}
          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
            }}
          >
            <Stack
              gap={1}
              flex={1}
              className="animate__animated animate__zoomIn"
              sx={{
                border: "1px #595959 solid",
                backgroundColor: "#262626",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>Education</Typography>
              <Box sx={{ fontSize: "15px", color: " #a6a6a6" }}>
                <Typography>2018 - 2021</Typography>
                <Typography>srikrishna Of ployTechinc college</Typography>
                <Typography>CGPA - 7.6%</Typography>
              </Box>
              <Box sx={{ fontSize: "15px", color: " #a6a6a6" }}>
                <Typography>2017 - 2019</Typography>
                <Typography>Sri Ragavendra Matric Hr.Sec School</Typography>
                <Typography>SSLC - 42%</Typography>
              </Box>
            </Stack>

            <Stack
              gap={1}
              flex={1}
              className="animate__animated animate__zoomIn"
              sx={{
                border: "1px #595959 solid",
                backgroundColor: "#262626",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>Work Experience</Typography>
              <Box sx={{ fontSize: "15px", color: " #a6a6a6" }}>
                <Typography>Apr - 2022</Typography>
                <Typography>Texmo Company</Typography>
                <Typography>
                  Operating CNC Machine, Basic Programmer 
                </Typography>
              </Box>
              
            </Stack>
          </Box>
          {/* end stack 2 */}

          {/* start stack 3 */}
          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
            }}
          >
            <Stack
              gap={1}
              flex={1}
              className="animate__animated animate__zoomIn"
              sx={{
                border: "1px #595959 solid",
                backgroundColor: "#262626",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>
                Area Of Interest

              </Typography>
              <Box sx={{ fontSize: "15px", color: " #a6a6a6" }}>
                <Typography>Web Developement</Typography>
                <Typography></Typography>

              </Box>
            </Stack>
            <Stack
              gap={1}
              flex={1}
              className="animate__animated animate__zoomIn"
              sx={{
                border: "1px #595959 solid",
                backgroundColor: "#262626",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>Skills</Typography>
              <Box sx={{ fontSize: "15px", color: " #a6a6a6" }}>
                <Box>
                  <Typography sx={{ fontSize: "20px", color: " #fff" }}>
                    Front-end Developement:-
                  </Typography>
                  <Box
                    sx={{
                      fontSize: "15px",
                      color: " #a6a6a6",
                      padding: "5px 0 0 20px",
                    }}
                  >
                    <Typography>HTML & CSS</Typography>
                    <Typography>My sql</Typography>
                     </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "20px", color: " #fff" }}>
                    Back-end Developement:-
                  </Typography>
                  <Box
                    sx={{
                      fontSize: "15px",
                      color: " #a6a6a6",
                      padding: "5px 0 0 20px",
                    }}
                  >
                    <Typography>Java</Typography>
                    <Typography>Spring MVC</Typography>
                   </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "20px", color: " #fff" }}>
                    Version Control:-
                  </Typography>
                  <Box
                    sx={{
                      fontSize: "15px",
                      color: " #a6a6a6",
                      padding: "5px 0 0 20px",
                    }}
                  >
                    <Typography>version 8.0</Typography>
                    <Typography>server 8.5</Typography>
                    
                  </Box>
                </Box>
              </Box>
            </Stack>

            {/* <Stack
              gap={1}
              flex={1}
              className="animate__animated animate__zoomIn"
              sx={{
                border: "1px #595959 solid",
                backgroundColor: "#262626",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "25px" }}>Soft Skills</Typography>
              <Box
                sx={{ fontSize: "15px", color: " #a6a6a6", lineHeight: "4px" }}
              >
                <Typography>Photography</Typography>
                <Typography>Adobe Premier Pro</Typography>
              </Box>
            </Stack> */}
          </Box>
          {/* end stack 3 */}
        </Stack>
      </Layout>
    </>
  );
}

export default About;
