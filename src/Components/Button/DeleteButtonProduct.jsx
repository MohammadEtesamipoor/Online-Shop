import { FaEdit, FaRegEdit, FaTrash } from "react-icons/fa";
import {
  Box,
  Button,
  Heading,
  ButtonGroup,
  IconButton,
  ModalOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  ModalFooter,
  ModalBody,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
  CloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
export const DeleteButtonProduct = ({
  nameProduct,
  getStatusDeleteProduct,
  idProduct,
}) => {
  const toast = useToast();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const {
    issOpen: isVisible,
    oonClose,
    oonOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Button bg="#282939" color="#F3F4FF" colorScheme="red" onClick={onOpen}>
        <FaTrash />
        <Text mr="10px">حذف</Text>
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        {overlay}
        <AlertDialogOverlay>
          <AlertDialogContent dir="rtl">
            <AlertDialogHeader
              direction="right"
              fontSize="lg"
              fontWeight="bold"
            >
              حذف کالا
            </AlertDialogHeader>

            <AlertDialogBody>کالا {nameProduct} حذف شود؟</AlertDialogBody>

            <AlertDialogFooter>
              <Button ml="5px" ref={cancelRef} onClick={onClose}>
                بستن
              </Button>
              <Button
                colorScheme="red"
                onClick={(event) => {
                  getStatusDeleteProduct(idProduct);
                  toast({
                    status: "success",
                    duration: 3000,
                    position: "bottom",
                    isClosable: true,
                    render: () => (
                      <Box>
                        <Alert display="flex" justifyContent="flex-end" status="success" variant='solid'>
                          محصول حذف شد
                          <AlertIcon ml="8px"/>
                        </Alert>
                      </Box>
                    ),
                  });
                }}
                ml={3}
              >
                حذف
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
