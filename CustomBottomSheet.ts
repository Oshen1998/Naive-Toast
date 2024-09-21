import {NativeModules} from 'react-native';

// Define the TypeScript interface for the BottomSheetModule
interface BottomSheetModuleInterface {
  showBottomSheet(
    params: {
      title: string;
      description: string;
      content: string;
      primaryButtonText: string;
      closeOnButtonClick: boolean;
    },
    callback: (result: string) => void,
  ): void;
}

// Extract the module from NativeModules
const {BottomSheetModule} = NativeModules as {
  BottomSheetModule: BottomSheetModuleInterface;
};

// Function to show the custom bottom sheet
const showCustomBottomSheet = () => {
  BottomSheetModule.showBottomSheet(
    {
      title: 'Custom Title',
      description: 'This is a custom description.',
      content: 'Here goes the content of the bottom sheet.',
      primaryButtonText: 'Submit',
      closeOnButtonClick: false,
    },
    (result: string) => {
      console.log('result'); // Handle callback from the bottom sheet
      console.log(result); // Handle callback from the bottom sheet
    },
  );
};

export default showCustomBottomSheet;
