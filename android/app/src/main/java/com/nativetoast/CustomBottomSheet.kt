package com.nativetoast

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import com.google.android.material.bottomsheet.BottomSheetDialogFragment

class CustomBottomSheet(private val title: String, private val description: String, private val content: String, private val primaryButtonText: String, private val onPrimaryButtonClick: () -> Unit,  private val closeOnButtonClick: Boolean = true): BottomSheetDialogFragment() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.bottom_sheet_layout, container, false)

        // Set the title, description, and content
        view.findViewById<TextView>(R.id.bottomSheetTitle).text = title
        view.findViewById<TextView>(R.id.bottomSheetDescription).text = description
        view.findViewById<TextView>(R.id.bottomSheetContent).text = content

        // Set up the primary button
        val primaryButton = view.findViewById<Button>(R.id.bottomSheetPrimaryButton)
        primaryButton.text = primaryButtonText
        primaryButton.setOnClickListener {
            onPrimaryButtonClick() // Invoke the callback when the button is clicked
            if (closeOnButtonClick) {
                dismissAllowingStateLoss()
            }
        }

        return view

    }
}