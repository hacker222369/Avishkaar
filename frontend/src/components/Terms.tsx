import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const Terms = () => {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Privacy Policy</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-o-md">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Swaggy.com provides an online platform that allows users to browse restaurant menus, place orders for food delivery or pickup, and make payments through our website or mobile application. By using our service, you agree to comply with these terms of service and any additional policies or guidelines provided by Swaggy.com.
          </DialogDescription>
          <DialogDescription>
            Users are responsible for providing accurate and up-to-date information when creating an account, placing orders, and making payments on Swaggy.com. You agree not to use our service for any unlawful or unauthorized purposes, including but not limited to fraudulent activities, spamming, or harassing others.
          </DialogDescription>
          <DialogDescription>
            Swaggy.com strives to ensure timely and accurate order processing and delivery; however, we cannot guarantee the availability, quality, or accuracy of menu items provided by partner restaurants. Delivery times are estimates and may vary depending on factors such as traffic conditions and order volume.
          </DialogDescription>
          <DialogDescription>
            Users agree to pay for all orders placed through Swaggy.com, including applicable taxes, delivery fees, and service charges. Payments are processed securely through our payment gateway, and users may be required to provide valid payment information to complete transactions.
          </DialogDescription>
          <DialogDescription>
          All content and materials available on Swaggy.com, including but not limited to logos, trademarks, text, images, and software, are owned or licensed by Swaggy.com and are protected by intellectual property laws. Users may not reproduce, distribute, modify, or use any content from Swaggy.com without prior written permission.
          </DialogDescription>  
        </DialogHeader>
        </DialogContent>
    </Dialog>
  );
};

export default Terms;