import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouter } from 'next/router'


export default function NavBar() {
  const router =useRouter()
  const location = router.pathname

  const NavArray = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Works",
      to: "/works",
    },
    {
      title: "Contact",
      to: "/contac",
    },
  ];

  return (
    <>
      <Stack
        flexDirection="row"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: "20px",
        }}
      >
        <Box sx={{display:{
              xl:"block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none"}}}>
          <Typography  className="portfoliolineargradient" sx={{ fontSize: "25px", color: "#fff",cursor:"pointer" }} onClick={() => {router.push("/")}}>
            PortFolio
          </Typography>
        </Box>

<Box  sx={{display:{
            xl:"block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none"},
            width: "70%",
        }}>
        <Stack
        direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            padding: 3
          }}
        >
          <Stack
            sx={{
              flexDirection:'row',            
              width: "70%",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff"
            }}
          >
            {NavArray.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    router.push(item.to)
                  }}
                  sx={{
                    color: location == item.to ?  "#fff" : "#4d4d4d" ,
                    transition:'0.3s',
                    "&:hover": {
                      boxShadow: "0px 3px 5px 3px #0099e6",
                      color:  "#fff" ,
                      scale:'1.2'
                    },
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
          </Stack>
          <Box>
            <Button  sx={{ backgroundColor: "grey", color: "#fff",transition:"0.3s","&:hover":{bgcolor:'#1a1a1a'} }} onClick={() =>{router.push("contac/")}}>
              Lets Talk!
            </Button>
            
          </Box>
        </Stack>
        </Box>
      </Stack>
    </>
  );
}
