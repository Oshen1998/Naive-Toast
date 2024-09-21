package com.nativetoast

import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReadableMap

class BottomSheetModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "BottomSheetModule"
    }

    @ReactMethod
    fun showBottomSheet(params: ReadableMap, callback: Callback) {
        val title = params.getString("title") ?: ""
        val description = params.getString("description") ?: ""
        val content = params.getString("content") ?: ""
        val primaryButtonText = params.getString("primaryButtonText") ?: ""
        val closeOnButtonClick = params.getBoolean("closeOnButtonClick") ?: true
        // Ensure the current activity is an instance of FragmentActivity
        if (currentActivity is FragmentActivity) {
            val fragmentManager = (currentActivity as FragmentActivity).supportFragmentManager

            val bottomSheet = CustomBottomSheet(
                title = title,
                description = description,
                content = content,
                primaryButtonText = primaryButtonText,
                closeOnButtonClick= closeOnButtonClick,
                onPrimaryButtonClick = {
                    // Call the callback when the primary button is clicked
                    callback.invoke("Primary button clicked")
                }
            )

            // Show the bottom sheet
            bottomSheet.show(fragmentManager, "CustomBottomSheet")
        } else {
            // Handle the case where the current activity is not a FragmentActivity
            callback.invoke("Failed to show bottom sheet: current activity is not a FragmentActivity")
        }
    }
}