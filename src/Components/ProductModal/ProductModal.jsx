import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ModalCloseButton,
  ModalBody,
  Lorem,
  ModalFooter,
  Alert,
  AlertIcon,
  Input,
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  FormHelperText,
  Select,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  Tooltip,
  RangeSliderThumb,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CheckboxGroup,
  Stack,
  Checkbox,
  Textarea,
  Drawer,
  useToast,
} from "@chakra-ui/react";
import { AddProducts } from "apis/ApiProduct";
import { UploadImage } from "apis/ApiUploadImage";
import React, { useEffect, useState, useRef } from "react";


export function ProductModal({ statusModal,product }) {
  const toast = useToast();
  const [sliderValueStart, setSliderValueStart] = useState("30");
  const [stateImg, setStateImg] = useState([]);
  const [sliderValueEnd, setSliderValueEnd] = useState("54");
  const [showTooltip, setShowTooltip] = useState(true);
  const [checkSize, setCheckSize] = useState(38, 40, 42);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const filesRef = useRef(null);
  const refCheackbox = useRef(null);

  useEffect(() => {
    onOpen();
  }, [statusModal]);

  const setSliderValues = (e) => {
    setSliderValueStart(e[0]);
    setSliderValueEnd(e[1]);
  };
  const handelOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formImg = new FormData();
    Array.from(filesRef.current.files).forEach((item) => {
      formImg.append("image", item);
    });
    const form = Object.fromEntries(formData);
    form.images = [];
    form.checkSize = [];
    form.checkSize.push(...checkSize);
    UploadImage(formImg).then((res) => {
      res.data.map((item) => {
        form.images.push(item.filename);
      });

      AddProducts(form).then((res) => {
        toast({
          status: "success",
          duration: 3000,
          position: "bottom",
          isClosable: true,
          render: () => (
            <Box>
              <Alert
                display="flex"
                justifyContent="flex-end"
                status="success"
                variant="solid"
              >
                محصول اضافه شد
                <AlertIcon ml="8px" />
              </Alert>
            </Box>
          ),
        });
        onClose();
      });
    });
  };

  const changeImg = (event) => {
    const imgList = [];
    if (event.target.files && event.target.files[0]) {
      for (let item of event.target.files)
        imgList.push(URL.createObjectURL(item));
    }
    setStateImg([...imgList]);
  };
  const checkBox = (check) => {
    setCheckSize(check);
  };
  const firstField = React.useRef();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        onClose={onClose}
        size="full"
      >
        <ModalOverlay />
        <form onSubmit={handelOnSubmit}>
          <ModalContent dir="rtl">
            <ModalCloseButton />
            <ModalHeader mr="20px">افزودن/ویرایش محصول</ModalHeader>
            <ModalBody pb={6} display="flex" flexDirection="column" gap="60px">
              <Box display="flex" justifyContent="space-between" gap="40px">
                <FormControl width="20%" isRequired>
                  <FormLabel>انتخاب تصویر</FormLabel>
                  <Input
                    variant="flushed"
                    type="file"
                    multiple
                    ref={filesRef}
                    onChange={(e) => changeImg(e)}
                  />
                </FormControl>
                <Box
                  display="flex"
                  gap="5px"
                  flexWrap="wrap"
                  border="1px"
                  borderColor="gray.200"
                  width="80%"
                >
                  {stateImg?.map((item) => (
                    <Image
                      boxSize="100px"
                      objectFit="contain"
                      src={item}
                      alt="product"
                    />
                  ))}
                </Box>
              </Box>

              <Box display="flex" justifyContent="space-between" gap="40px">
                <FormControl isRequired>
                  <FormLabel>نام کالا</FormLabel>
                  <Input name="product-name-fa" variant="flushed" value={product&&product['product-name-fa']}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>قیمت کالا</FormLabel>
                  <Input name="price" type="number" variant="flushed" value={product&&product['price']} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>دسته بندی</FormLabel>
                  <Select
                    dir="ltr"
                    textAlign="right"
                    variant="flushed"
                    placeholder="یک گزینه انتخاب کنید"
                    name="category-id"
                  >
                    <option>3</option>
                    <option>2</option>
                  </Select>
                </FormControl>
              </Box>
              {/* size range checkbox */}
              <Box display="flex">
                <FormControl width="10%" isRequired>
                  <FormLabel>تعداد کالا</FormLabel>

                  <NumberInput
                    dir="ltr"
                    name="count"
                    size="sm"
                    maxW={100}
                    max={100}
                    defaultValue={product?product['count']:3}
                    min={1}
                    textAlign="right"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <Box width="90%">
                  <FormLabel>سایز</FormLabel>
                  <SliderThumbWithTooltip checkBox={checkBox} />
                </Box>
              </Box>

              <Box></Box>

              <Box>
                <FormControl isRequired>
                  <FormLabel mb="8px">توضیحات</FormLabel>
                  <Textarea
                    placeholder="درباره محصول"
                    size="sm"
                    textAlign="right"
                    name="description"
                    value={product&&product['description']}
                  />
                </FormControl>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                ذخیره
              </Button>
              <Button mr="10px" onClick={onClose}>
                انصراف
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Drawer>
    </>
  );
}

const SliderThumbWithTooltip = ({ checkBox }) => {
  const [sliderValueStart, setSliderValueStart] = React.useState("30");
  const [sliderValueEnd, setSliderValueEnd] = React.useState("54");
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [cheack, setCheack] = useState([]);
  const [checkCount, setCheckCount] = useState([38, 40, 42]);

  useEffect(() => {
    checkBox([...cheack]);
  }, [cheack]);
  useEffect(() => {
    console.log(checkCount);
  }, [checkCount]);

  const setSliderValues = (e) => {
    // e.preventDefault();
    setSliderValueStart(e[0]);
    setSliderValueEnd(e[1]);
    const checkCountNew = [];
    for (let i = e[0]; i < e[1]; i++) {
      checkCountNew.push(i);
    }
    setCheckCount([...checkCountNew]);
  };

  const cheackbox = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      cheack.push(e.target.value);
      setCheack([...cheack]);
    } else {
      const newCheckbox = [];
      cheack.map((item) => {
        if (item !== e.target.value) newCheckbox.push(item);
      });
      setCheack([...newCheckbox]);
    }
  };
  return (
    <Accordion
      dir="ltr"
      allowToggle
      onClick={() => {
        setShowTooltip(!showTooltip);
      }}
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="right" pr="5px">
              انتخاب محدوده
            </Box>

            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <RangeSlider
            min={30}
            max={54}
            step={1}
            onChange={(val) => setSliderValues(val)}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <Tooltip
              position="relative"
              hasArrow
              bg="blue.600"
              color="white"
              placement="bottom"
              isOpen={showTooltip}
              label={`${sliderValueStart}`}
            >
              <RangeSliderThumb index={0} />
            </Tooltip>
            <Tooltip
              hasArrow
              bg="blue.600"
              color="white"
              placement="bottom"
              isOpen={showTooltip}
              label={`${sliderValueEnd}`}
            >
              <RangeSliderThumb index={1} />
            </Tooltip>
          </RangeSlider>
          <Box mt="50px">
            {/* <FormLabel>انتخاب تصویر</FormLabel> */}
            <CheckboxGroup colorScheme="teal">
              <Stack
                onChange={cheackbox}
                spacing={[1, 5]}
                display="flex"
                flexWrap="wrap"
                direction={"row"}
              >
                {checkCount.length >= 1 &&
                  checkCount.map((item, index) => (
                    <Box>
                      <Checkbox border="gray" value={item.toString()}>
                        {item}
                      </Checkbox>
                    </Box>
                  ))}
              </Stack>
            </CheckboxGroup>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
