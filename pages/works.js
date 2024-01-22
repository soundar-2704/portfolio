import React from "react";
import Layout from "@/components/Layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "animate.css";
import { Projects } from "../components/Array";

function Works() {
  return (
    <>
      <Layout>
        <Stack gap={3} flex={1} margin="30px 60px 100px 60px">
          {/* start stact 1  */}
          <Box
            className="animate__animated animate__flip"
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              //bgcolor:'red',
            }}
          >
            <Image
              alt="image"
              src={require("../public/R.png")}
              height="60"
              width="70"
              borderRadius="15"
              padding="10"
              color="#fff"
            />
            <Typography
              sx={{
                fontSize: {
                  xl: "50px",
                  lg: "50px",
                  md: "50px",
                  sm: "35px",
                  xs: "35px",
                },
                fontWeight: "bold",
                color: "#bfbfbf",
                fontFamily: "serif",
              }}
            >
              Projects
            </Typography>
            <Image
              alt="image"
              src={require("../public/R.png")}
              height="60"
              width="70"
              borderRadius="15"
              padding="10"
              color="#fff"
            />
          </Box>
          {/* end stack 1 */}

          {/*------------------------------ Project Template Start------------------------------ */}

          <Grid
            container
            sx={{
              padding: "10px 0",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              gap: { xl: 0, lg: 0, md: 3, sm: 3, xs: 3 },
              width: "100%",
              gap: 2,
              // bgcolor: "red",
            }}
          >
            {/* card 1 */}
            {Projects.map((item) => (
              <Grid
                item
                md={4}
                key={item._id}
                className="animate__animated animate__zoomIn"
                gap={2}
                sx={{
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "300px",
                  width: "300px",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "25px 25px 25px 25px",
                  bgcolor: "#262626",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0px 5px 8px 0px #0099e6",
                    elevation: 20,
                    scale: ".90",
                  },
                }}
              >
                <Box borderRadius="15" padding="10" marginTop="10px">
                  <Image
                    src={item.img}
                    height="150"
                    width="250"
                    style={{
                      borderRadius: "15px",
                    }}
                  />
                </Box>
                <Typography sx={{ fontSize: "16px", color: "#bfbfbf" }}>
                  {item.type}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                  <a
                    target="_blank"
                    style={{ color: "#fff", textDecoration: "none" }}
                    href={item.link}
                  >
                    {item.tittle}
                  </a>
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#bfbfbf" }}>
                  {item.built}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Layout>
    </>
  );
}

export default Works;
