import {
  Box,
  Heading,
  Grid,
  GridItem,
  Center,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useContext } from "react";
import HomePageBox from "../Components/HomePageBox";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContextProvider";
import Slider from "../Components/Slider";
import Slider2 from "../Components/Slider2";
export default function HomePage() {
  const { location } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <HomePageBox />
      {/* <Box w="70%" margin="auto">
        <Heading size="sm" mt="5" textAlign="left">
          SELF DRIVE CARS IN {location!=="" ? location : "BANGLORE"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          In addition to being the capital city, {location!=="" ? location : "BANGLORE"} is a cosmopolitan city
          with people from all over the country, and ready to embrace an
          evolving lifestyle. Surrounded by the 4 states of Haryana, Rajasthan,
          Punjab, and Uttar Pradesh, {location!=="" ? location : "BANGLORE"} has a mixed culture and a vibrant
          social life. With an expanding road length of over 25,000 kilometres
          (including national highways), there has been a steady rise in the
          self drive car rental in {location!=="" ? location : "BANGLORE"} that are more affordable than
          chauffeur-driven vehicles and offers on-road convenience to young
          drivers and working professionals.{" "}
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          CAR ON RENT IN {location!=="" ? location : "BANGLORE"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          Zoomcar allows you to hire a rental or self-drive car of your choice
          at an affordable rate. Sign up on our website or mobile app, and
          decide on the rental duration, pickup location, and car type. You can
          use Zoomcar to pick the car that is suited for your needs. For
          instance, choose a small car that can zip you through the city traffic
          in {location!=="" ? location : "BANGLORE"}, or a spacious SUV for an outstation travel such as for a
          drive from {location!=="" ? location : "BANGLORE"} to Agra. Car rentals make it possible for you to pick
          a car which suits your purpose, whether it is a small one when you are
          travelling alone, or a bigger spacious one when you are in a group.
          For a small convenience fee, you can also avail of our {location!=="" ? location : "BANGLORE"} airport
          Taxi. The {location!=="" ? location : "BANGLORE"} airport draws travellers from all over the world, and
          the easiest way to get a set of wheels on arrival is to hire a
          self-drive car which will be available as soon as you land. You can
          also opt for our luxury car hires such as Mercedes or Audi models for
          that special evening with your friend, or for attending a wedding in
          the city. Zoomcar provides you with the joy of driving a car, without
          any of the added responsibilities involved in owning a car such as
          filling up petrol, getting your car serviced, or paying for car
          insurance. It also ensures safety (especially for young women) while
          travelling in a group or individually.
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          RENT A CAR IN {location!=="" ? location : "BANGLORE"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          Zoomcar provides you with a car on rent in {location!=="" ? location : "BANGLORE"} without a driver.
          Book your car conveniently through online booking or on your
          smartphone. The vehicles have all-India permits, and Zoomcar provides
          multiple parking sites across the country from where you can pick up
          your chosen car. You also have the flexibility of choosing from
          various packages, depending on whether you need the vehicle for a
          longer time or a longer distance.
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          ABOUT ZOOMCAR
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          No more worries about petrol mileage, fuel costs, insurance, and car
          breakdowns! Zoomcar has enabled driving convenience for travellers
          around the country and is fast expanding its reach to cities including
          Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR,
          Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai,
          Mysore, Pune, Siliguri and Vizag. Self-drive cars from Zoomcar have
          given customers more control, privacy, and freedom. Book a self-drive
          car in any city you visit with the Zoomcar app on your phone and feel
          at home wherever you go.{" "}
        </Text>
      </Box>
      <Box>
        <Image
        m="5"
          src="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png"
          alt="tagline"
          maxH="200px"
        />
      </Box>
      <Text align="center" mt="5" mb="2" fontSize="12px">
        © Copyright 2022 Zoomcar India Private Ltd. All rights reserved
      </Text> */}
      <br />
      <br />
      <br />
      <Center style={{ height: "80px" }}>
        <Heading fontWeight="bold" fontSize={["lg", "3xl", "3xl", "4xl"]}>
          CHOOSE FROM OUR WIDE RANGE OF CARS
        </Heading>
      </Center>

      <Slider2 />

      <Box style={{ height: "130px", marginTop: "12px" }}>
        <Center p={30}>
          <Flex flexDirection={"column"}>
            <Box>
              <Heading
                textAlign="center"
                color={"black"}
                fontWeight=""
                margin="0"
                size={["md", "lg", "xl"]}
              >
                UNMATCHED BENEFITS
              </Heading>
            </Box>
            <Center>
              <Box>
                <Heading
                  textAlign="center"
                  color={"black"}
                  fontWeight="xl"
                  margin="0"
                  size={["md", "md", "md"]}
                >
                  Drive everywhere with freedom
                </Heading>
              </Box>
            </Center>
          </Flex>
        </Center>
      </Box>

      <Slider />

      <br />
      <br />
      <br />
      <Box bg="rgb(244,244,244)" p={5}>
        <Box w="70%" m="auto">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem>
              <a>
                <Image
                  src="https://zoomcar-assets.zoomcar.com/pictures/original/d70e7f58da384df0f3ba169cf19e8e931879c66c.jpeg?1652354515"
                  borderRadius="10px"
                />
              </a>
            </GridItem>
            <GridItem>
              <a>
                <Image
                  src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808"
                  borderRadius="10px"
                />
              </a>
            </GridItem>
            <GridItem>
              <a>
                <Image
                  src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808"
                  borderRadius="10px"
                  w="100%"
                />
              </a>
            </GridItem>
            <GridItem>
              <a>
                <Image
                  src="https://zoomcar-assets.zoomcar.com/pictures/original/55c3970a33c8f4d10dd3c9ace39d20e32af5c8ba.jpg?1651758755"
                  borderRadius="10px"
                  h="100%"
                />
              </a>
            </GridItem>
          </Grid>
        </Box>
      </Box>



      <br />
      <br />
      <br />
      <Box pt={"2rem"} bg={"#52d168"} color={"white"}>
        <Tabs w={"90%"} margin="auto" bg="#52d168" variant="unstyled">
          <TabList justifyContent={"space-between"}>
            <Tab
              _selected={{ borderBottom: "2px solid white" }}
              fontWeight="bold"
            >
              <Heading size={["xs", "md"]} color={"#040d05"}>
                ABOUT US
              </Heading>
            </Tab>
            <Tab
              _selected={{ borderBottom: "2px solid white" }}
              fontWeight="bold"
            >
              <Heading size={["xs", "md"]} color={"#040d05"}>
                BLOGS
              </Heading>
            </Tab>
            <Tab
              _selected={{ borderBottom: "2px solid white" }}
              fontWeight="bold"
            >
              <Heading size={["xs", "md"]} color={"#040d05"}>
                CAREERS
              </Heading>
            </Tab>
            <Tab
              _selected={{ borderBottom: "2px solid white" }}
              fontWeight="bold"
            >
              <Heading size={["xs", "md"]} color={"#040d05"}>
                HELP & SUPPORT
              </Heading>
            </Tab>
          </TabList>
          <br />
          <TabPanels>
            <TabPanel>
              <Heading size="md">About Quick-Car</Heading>
              <Text>
                Zoomcar is India’s largest marketplace for cars on rent. From
                short road trips to quick in-city drives for groceries, supply
                pick-up, food runs, we have the cheapest car rental options for
                all your needs! A hatchback for daily commute, a sedan for short
                trips, SUV for hills or a luxury car for a surprise.
              </Text>
              <Text>
                With Zoomcar, you can experience the convenience of online
                booking. The cars listed on our platform come with all-India
                permits that include vehicle insurance. It is extremely easy to
                pick up the car from the host location. You can drive unlimited
                KMs, with 100% Free Cancellation up to 6 hours before the trip
                start, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
                Assistance. Car rent per KM starts as low as Rs. 49/hour. From
                short road trips to quick in-city drives for groceries, supply
                pick-up, meeting friends and family, doctor visits, business
                trips, we have the cheapest car rental options for all your
                needs! A hatchback for daily commute, a sedan for short trips,
                SUV for hills or a luxury car for a surprise.
              </Text>
            </TabPanel>
            <TabPanel>
              <Heading size="md">
                Find more information about Zoomcar Blogs here
              </Heading>
            </TabPanel>
            <TabPanel>
              <Heading size="md">
                Find more information about Zoomcar Careers here
              </Heading>
            </TabPanel>
            <TabPanel>
              <Heading size="md">
                Find more information about Zoomcar Help and Support here
              </Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}
