import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/core";
import PostContent from "./PostContent";

const SubmitModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSubmit = () => {
		console.log("Submitted");
		onClose();
	};

	return (
		<>
			<Button
				d="block"
				mx={4}
				my={8}
				variant="outline"
				variantColor="blue"
				size="lg"
				onClick={onOpen}>
				Proceed to Send Graphic
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Post Content</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<PostContent />
					</ModalBody>

					<ModalFooter>
						<Button variantColor="blue" onClick={handleSubmit}>
							Send Final Post
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SubmitModal;
