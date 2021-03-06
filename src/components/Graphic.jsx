import React from "react";
import { Box, Heading, Flex, Divider, Text, Stack, Icon } from "@chakra-ui/core";
import { Map, TileLayer, WMSTileLayer } from "react-leaflet";
import { connect } from "react-redux";
import StormMotion from "./StormMotion";

class Graphic extends React.Component {
	state = {
		center: [32.2, -111.0],
		zoom: 8,
	};

	getIndex = (title) => {
		for (let i = 0; i < this.props.options.length; i++) {
			if (this.props.options[i].title === title) {
				return i;
			}
		}
	};

	fillActions = () => {
		return this.props.optionClicked.length !== 0
			? this.props.optionClicked.map((action, i) => {
					const index = this.getIndex(action);
					return (
						<Stack key={i} isInline spacing={2} align="center">
							<Box textAlign="center" w="80px">
								{this.props.options[index].icon === "warning" ? (
									<Icon name="warning" m="10px" size="30px" color="gray.200" />
								) : (
									<i className={this.props.options[index].icon}></i>
								)}
							</Box>
							<Text color="gray.200" fontSize="xl">
								{this.props.options[index].wording}
							</Text>
						</Stack>
					);
			  })
			: null;
	};

	render() {
		return (
			<Box id="capture" boxShadow="md" w={1000} h={500}>
				<Flex h="100%">
					<Box w={450} h="100%" position="relative" p={5} bg="#0099D8">
						<Heading textAlign="center" color="gray.200">
							Happening Now
						</Heading>
						<Divider />
						<Stack>{this.fillActions()}</Stack>
						<StormMotion />
					</Box>
					<Box h="100%" w="100%">
						<Map center={this.state.center} zoom={this.state.zoom} zoomControl={false}>
							<TileLayer
								attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								crossOrigin=""
								url="https://api.mapbox.com/styles/v1/robhowlett/ckcun9dwf3ele1iohl7rjelfv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iaG93bGV0dCIsImEiOiJja2RtMnB0bHIwOTNhMnpwOG96bTNuc3d5In0.gmFvk06PbmiibW_w7kNeuA"
							/>
							<WMSTileLayer
								url="https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer?"
								layers="1"
								format="image/png"
								transparent="true"
								opacity=".6"
								crossOrigin=""
							/>
						</Map>
					</Box>
				</Flex>
			</Box>
		);
	}
}

const mapStateToProps = (state) => ({
	options: state.options,
	optionClicked: state.optionClicked,
});

export default connect(mapStateToProps)(Graphic);
