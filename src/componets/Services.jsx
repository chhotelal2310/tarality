import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, colors, Container, Grid } from "@mui/material";

const cardData = [
    {
        id: 1,
        title: "Sketches",
        description:
            "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
        // image: "https://www.mark2fashiontech.in/sitepad-data/uploads/2024/07/6-1.png",
        image: "data:image/png;base64,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"
    },
    {
        id: 2,
        title: "UI/UX Design",
        description:
            "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
        image: "https://img.freepik.com/premium-vector/warehouse-management-system-icon-vector-image-can-be-used-logistics_120816-107663.jpg",
    },
    {
        id: 3,
        title: "Product Design",
        description:
            "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
        image: "https://cdn-icons-png.flaticon.com/256/3028/3028207.png",
    },
    {
        id: 4,
        title: "App Design",
        description:
            "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
        image: "https://images.squarespace-cdn.com/content/v1/5e56a1f2fedd07272f5f0d86/1589897366755-DSW17MS0RW4AOXHUKHI0/3+copy.png?format=1000w",
    },
    {
        id: 5,
        title: "Motion Graphics",
        description:
            "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwX9wKrX_-GjWtvTO-0F3xVboXKnamPt3T0p9WNnpu0m6jteiu",
    },
    {
        id: 6,
        title: "Responsive Design",
        description:
            "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
        image: "https://cdn-icons-png.freepik.com/512/11100/11100030.png",
    },
];

export default function Services() {
    return (
        <Box sx={{ bgcolor: "#0a101e" }}>
            <Container>
         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Typography variant="h3" sx={{ color: '#a9adb8', fontSize: '90px', fontWeight: 700, textTransform: 'uppercase', pb: 2, opacity: .04 }}>
                            Services
                        </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', top: '10px' }}>
                        <Typography sx={{ fontSize: '24px', color: '#FEC544',textTransform:'uppercase' }}>services</Typography>
                        <Box sx={{ width: '180px', height: '1px', bgcolor: '#FEC544', marginTop: '10px' }}></Box>
                    </Box>
                </Box>


                <Grid container spacing={2}>
                    {cardData.map((card) => (
                        <Grid item xs={12} sm={6} md={4} key={card.id}>
                            <Card sx={{ maxWidth: 345, padding: "10%", backgroundColor: '#101624' }}>
                                <CardActionArea>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: "40",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                bgcolor: 'gray',
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: "50%",
                                                height: "80px",
                                                width: "80px",
                                                overflow: "hidden",

                                                "&:hover": {
                                                    border: '2px solid #FEC544'
                                                },
                                            }}
                                        >
                                            <CardMedia
                                                sx={{
                                                    "&:hover": {
                                                        color: "#FEC544",
                                                    },
                                                }}
                                                component="img"
                                                height="140"
                                                image={card.image}
                                                alt={card.title}
                                            />
                                        </Box>
                                    </Box>

                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            align="center"

                                            sx={{
                                                color: 'white',

                                                "&:hover": {
                                                    color: "#FEC544",
                                                },

                                            }}
                                        >
                                            {card.title}

                                        </Typography>


                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary", color: 'white', }}
                                        >
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
