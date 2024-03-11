import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrivacyPolicy = () => {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms of Service</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-o-md">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Swaggy.com collects personal information such as name, contact details, and address during the registration and checkout process. This information is used solely for order processing, delivery, and communication purposes.
          </DialogDescription>
          <DialogDescription>
            We prioritize the security of your personal information and have implemented robust measures to safeguard it against unauthorized access, disclosure, alteration, or destruction. Our systems are regularly monitored and updated to maintain the integrity of your data.
          </DialogDescription>
          <DialogDescription>
            Swaggy.com does not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for the purposes of order fulfillment and delivery. However, we may share anonymized or aggregated data for analytical or marketing purposes.
          </DialogDescription>
          <DialogDescription>
            We may use cookies and similar tracking technologies to enhance your browsing experience and personalize content and advertisements. You have the option to disable cookies in your browser settings, but this may affect the functionality of certain features on our website.
          </DialogDescription>
          <DialogDescription>
            You have the right to opt-out of receiving marketing communications from Swaggy.com at any time. Additionally, you may request access to, correction of, or deletion of your personal information stored on our systems by contacting our customer support team.
          </DialogDescription>  
        </DialogHeader>
        </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;