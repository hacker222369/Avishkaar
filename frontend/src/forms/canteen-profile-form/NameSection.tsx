import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { useFormContext } from "react-hook-form";
  
  const NameSection = () => {
    const { control } = useFormContext();
    return (
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">Name</h2>
          <FormDescription>
          Plate up your canteen's title!
          </FormDescription>
        </div>
        <FormField
          control={control}
          name="canteenName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter here:</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  
  export default NameSection;