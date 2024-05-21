import { useRecoilValue } from 'recoil';
import { couponListSelector } from '../recoil/selector';

export const useCouponFinder = () => {
  const coupons = useRecoilValue(couponListSelector);

  const findCouponByCode = (code: string) => {
    return coupons.find((coupon) => coupon.code === code);
  };

  return { findCouponByCode };
};
