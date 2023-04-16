import  *  as Yup from "yup";
export const CartValidtion = Yup.object({
  name: Yup.string()
    .required("نام خود را وارد کنید")
    .max(15, "نام باید کمتر از 15 حرف باشد"),
  family: Yup.string()
    .required("نام خانودادگی خود را وارد کنید")
    .max(25, "نام باید کمتر از 25 حرف باشد"),
  email: Yup.string()
    .required("آدرس ایمیل خود را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل خود را وارد کنید")
    .max(10, "شماره موبایل باید 11 رقم باشد")
    .min(10, "شماره موبایل باید 11 رقم باشد"),
  date: Yup.string().required("تاریخ تحویل را وارد کنید"),
  address: Yup.string().required("آدرس خود را وارد کنید").max(100, "متن آدرس بیش از حد مجاز است")
});
