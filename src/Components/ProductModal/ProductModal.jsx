import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Lorem,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
export function ProductModal({ statusModal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, [statusModal]);
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <FormControl isRequired>
          <ModalContent dir="rtl">
            <ModalCloseButton />
            <ModalHeader mr="20px">افزودن/ویرایش محصول</ModalHeader>
            <ModalBody pb={6} display="flex" flexDirection="column" gap="20px">
              <Box>
                <FormLabel>انتخاب تصویر</FormLabel>
                <Input
                  variant="flushed"
                  placeholder="Flushed"
                  type="file"
                  multiple
                />
              </Box>
              <Box>
                <FormLabel>نام کالا</FormLabel>
                <Input variant="flushed" />
              </Box>
              <Box>
                <FormLabel>دسته بندی</FormLabel>
                <Select
                  dir="ltr"
                  textAlign="right"
                  variant="flushed"
                  placeholder="یک گزینه انتخاب کنید"
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button   type='submit' colorScheme="blue" mr={3}>
                ذخیره
              </Button>
              <Button mr="10px" onClick={onClose}>
                انصراف
              </Button>
            </ModalFooter>
          </ModalContent>
        </FormControl>
      </Modal>
    </>
  );
}
