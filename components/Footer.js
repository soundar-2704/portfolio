import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

function Footer() {
  const router = useRouter();
  const location = router.pathname;
  const [scroll, setScroll] = useState(false)
  

  useEffect(() => {
    window.addEventListener("scroll" , () =>{
      if (window.scrollY > 80) {
        setScroll(true)
      }else{
        setScroll(false)
      }
    })
  }, [1])

  const scrollup = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const FootArray = [
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
      <Stack sx={{ flexDirection: "column", width: "100%", mt: "50px" }}>
        <Box  className="portfoliolineargradient"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#fff",
            justifyContent: "space-around",
            fontSize: "20px",
          }}
        >
          SOUNDAR RAJAN
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          {FootArray.map((item, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                onClick={() => {
                  router.push(item.to);
                }}
                sx={{
                   color: location == item.to ? "#fff" : "#4d4d4d",
                fontWeight: location == item.to ? "bold" : "100",
                "&:hover":{
                    color: "#fff",
                  },
             }}
              >
                {item.title}
              </Button>
            );
          })}
        </Box>
      </Stack>

       { scroll && <IconButton sx={{
        position: "fixed",
        bottom: 20,
        right: 30,
        color:'#000',
        transition:'0.5s',
        bgcolor:'#fff',
        "&:hover":{
          bgcolor:'#595959',
          color:'#fff'
        }
}}
        onClick={scrollup}
>
     <  VerticalAlignTopIcon fontSize="large" />
      </IconButton> }
    </>
  );
}

export default Footer;
