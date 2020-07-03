import React from "react";
import {
  Text,
  Textarea,
  Box,
  CheckboxGroup,
  Checkbox,
  Input,
  Stack
} from "@chakra-ui/core";

class PostContent extends React.Component {
  state = {
    postContent: "",
    twitterTags: "#azwx"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const characterCount =
      this.state.postContent.length + this.state.twitterTags.length + 1;

    return (
      <Box>
        <CheckboxGroup mb={5}>
          <Checkbox value="twitter">Twitter</Checkbox>
          <Checkbox value="facebook">Facebook</Checkbox>
          <Checkbox value="webpage">Webpage</Checkbox>
        </CheckboxGroup>

        <Stack isInline justify="space-between">
          <Text>Post Content:</Text>
          <Text color={characterCount <= 280 ? "gray.500" : "red.500"}>
            Character Count: {characterCount}
          </Text>
        </Stack>
        <Textarea
          h="150px"
          mb={5}
          name="postContent"
          value={this.state.postContent}
          onChange={this.handleChange}
        />

        <Text>Twitter Hashtags:</Text>
        <Input
          name="twitterTags"
          value={this.state.twitterTags}
          onChange={this.handleChange}
        />
      </Box>
    );
  }
}

export default PostContent;
