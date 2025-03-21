// "use client";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { createSocial } from "@/services/social";
// import { toast } from "@/hooks/use-toast";


// const formSchema = z.object({
//   name: z.string().min(1, "Title is required"),
//   value: z.string().min(1, "Description is required"),
//   icon: z.string().min(1, "icon is required"),

// });

// type FormData = z.infer<typeof formSchema>;

// const AddSocial = () => {


//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await createSocial(data);
//       console.log("Social created:", response);
//       toast({
//         title: "Social Created",
//         description: "Your new Social has been successfully added!",
//         variant: "default",
//       });


//       reset();

//     } catch (error) {
//       console.error("Error creating Social:", error);
//       toast({
//         title: "Error",
//         description: "There was an error while creating the Social. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };




//   return (
//     <Card className="flex flex-1 flex-col gap-6 p-6 shadow-none rounded-none">
//       <CardHeader className="p-0">
//         <CardTitle className="text-3xl font-bold text-gray-800">Add New Social</CardTitle>
//       </CardHeader>
//       <CardContent className="py-10 rounded-lg border border-dashed border-gray-300 bg-white">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <Label htmlFor="title" className="block text-lg font-medium">
//               Title
//             </Label>
//             <Input
//               id="title"
//               type="text"
//               placeholder="Enter social title"
//               {...register("name")}
//               className="mt-2 w-full border rounded-md p-3 bg-gray-50 text-gray-900 placeholder-gray-500"
//             />
//             {errors.name && (
//               <p className="mt-1 text-red-600 text-sm font-semibold">
//                 {String(errors.name.message)}
//               </p>
//             )}
//           </div>



//           <div>
//             <Label htmlFor="description" className="block text-lg font-medium">
//               Social link
//             </Label>
//             <Textarea
//               id="value"
//               placeholder="Enter social link"
//               {...register("value")}
//               className="mt-2 w-full h-30 border rounded-md p-3 bg-gray-50 text-gray-900 placeholder-gray-500"
//             />
//             {errors.value && (
//               <p className="mt-1 text-red-600 text-sm font-semibold">
//                 {String(errors.value.message)}
//               </p>
//             )}
//           </div>
//           <div>
//             <Label htmlFor="icon" className="block text-lg font-medium">
//               Icon
//             </Label>
//             <Textarea
//               id="icon"
//               placeholder="Enter icon class (e.g., 'uil uil-arrow-down')"
//               {...register("icon")}
//               className="mt-2 w-full h-30 border rounded-md p-3 bg-gray-50 text-gray-900 placeholder-gray-500"
//             />
//             {errors.icon && (
//               <p className="mt-1 text-red-600 text-sm font-semibold">
//                 {String(errors.icon.message)}
//               </p>
//             )}
//             <p className="mt-2 text-sm text-gray-600">
//               You can find icons at <a href="https://iconscout.com/unicons/free-line-icon-fonts/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">IconScout - Unicons</a>. Please enter the icon class (e.g., <code>uil uil-arrow-down</code>).
//             </p>
//           </div>




//           <Button
//             type="submit"
//             variant="default"
//             className="!bg-primary text-white hover:bg-primary-dark transition-colors"
//           >
//             Add Social
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default AddSocial;
