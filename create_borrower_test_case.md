#  Create Borrower - Test Cases

## Overview

This document contains test cases
for the Create Borrower functionality
in the CRM application.

## Test Case Index

## Index


| # | Test Case Description | Status |
|---|---|---|
| 001 | Verify Branch Selection and Save Borrower Information | Pass |
| 002 | Verify Available Branches in Dropdown | Pass |
| 003 | Verify User Can Select a Branch | Pass |
| 004 | Verify User Can Change Previously Selected Branch |Pass |
| 005 | Verify Borrower Can Be Saved With Selected Branch | Pass |
| 006 | Verify Selected Branch After Reopening Borrower Information | Pass |
| 007 | Verify Validation When Branch Is Not Selected |Pass |
| 008 | Verify Branch Validation When Saving Without Selection | Pass |
| 009 | Verify System Does Not Allow Saving Without Branch | Pass |
| 011 | Verify Branch Dropdown Arrow | Pass |
| 012 | Verify Branch Dropdown Options Are Selectable | Pass |
| 014 | Verify Selected Branch Remains Selected While Navigating Within Form | Pass |
| 015 | Verify that the Name field is mandatory in Borrower Contact Information | Pass |
| 017 | Verify validation when Name is left blank | Pass|
| 018 | Verify Name with only blank spaces | Not Executed |
| 019 | Verify Name with alphabets only | Fail |
| 020 | Verify Name with first and last name | Pass |
| 021 | Verify Name with special characters | Not Executed |
| 022 | Verify Name with numeric values | Not Executed |
| 023 | Verify Name with minimum allowed characters | Pass |
| 024 | Verify Name with maximum allowed characters | Pass |
| 025 | Verify Name exceeding maximum character limit | Not Executed |
| 026 | Verify that the entered Name is saved successfully | Pass |

| 029 | Verify that the user can proceed after entering a valid Name | Pass |
| 030 | Verify validation when only spaces are entered in Name | Pass |
| 031 | Verify Name with special characters only | Pass|
| 032 | Verify that the system prevents saving after removing Name | Not Executed |
| 033 | Verify validation when submitting without contact information | Not Executed |
| 034 | Verify validation when Name is cleared before clicking Save | Not Executed |




TC_001 — Verify Branch Selection and Save Borrower Information

Feature: Branch Selection and Save Borrower Information

Scenario: Select a branch and save borrower information
  Given the user logs into the CRM application
  And navigates to CRM → Borrower → Create Borrower → Contact Information
  When the user selects a valid branch from the Branch dropdown
  And saves the borrower information
  Then the borrower information should be saved successfully
  And the selected branch should be saved correctly


TC_002 — Verify Available Branches in Dropdown

Feature: Available Branches in Dropdown

Scenario: Display all available branches in the Branch dropdown
  Given the user is on the Borrower Contact Information section
  When the user clicks on the Branch dropdown
  Then all available branches should be displayed


TC_003 — Verify User Can Select a Branch

Feature: Select a Branch

Scenario: Select an available branch from the dropdown
  Given the user is on the Borrower Contact Information section
  When the user clicks on the Branch dropdown
  And selects an available branch
  Then the selected branch should be displayed in the dropdown


TC_004 — Verify User Can Change Previously Selected Branch

Feature: Change Previously Selected Branch

Scenario: Change the previously selected branch
  Given the user has already selected a branch
  When the user opens the Branch dropdown
  And selects another available branch
  Then the newly selected branch should be displayed in the dropdown


TC_005 — Verify Borrower Can Be Saved With Selected Branch

Feature: Save Borrower With Selected Branch

Scenario: Save borrower information with a valid branch
  Given the user is on the Borrower Contact Information section
  When the user selects a valid branch
  And saves the borrower information
  Then the borrower should be saved successfully
  And the borrower should be associated with the selected branch


TC_006 — Verify Selected Branch After Reopening Borrower Information

Feature: Previously Selected Branch After Reopening Borrower

Scenario: Display the previously selected branch after reopening borrower information
  Given the user has created a borrower with a selected branch
  When the user reopens the borrower's information
  Then the previously selected branch should be displayed correctly


TC_007 — Verify Validation When Branch Is Not Selected

Feature: Mandatory Branch Validation

Scenario: Display validation when the Branch field is not selected
  Given the user is on the Borrower Contact Information section
  And the Branch dropdown is not selected
  When the user tries to save the borrower information
  Then the system should prevent saving
  And a mandatory field validation message should be displayed


TC_008 — Verify Branch Validation When Saving Without Selection
Feature: Branch Dropdown Validation Without Selection

Scenario: Display validation when the user opens the dropdown but does not select a branch
  Given the user is on the Borrower Contact Information section
  When the user clicks on the Branch dropdown
  And does not select any branch
  And tries to save the borrower information
  Then the Branch validation message should be displayed


TC_009 — Verify System Does Not Allow Saving Without Branch
Feature: Prevent Saving Without Branch

Scenario: Prevent saving borrower information after clearing the selected branch
  Given the user has selected a branch
  When the user clears the selected branch
  And tries to save the borrower information
  Then the system should not allow saving
  And the mandatory Branch validation should be displayed


TC_010 — Verify Mandatory Indicator for Branch
Feature: Mandatory Indicator for Branch Field

Scenario: Display mandatory indicator for the Branch field
  Given the user is on the Borrower Contact Information section
  When the user views the Branch field
  Then the mandatory indicator such as * should be displayed


TC_011 — Verify Branch Dropdown Arrow
Feature: Branch Dropdown Arrow

Scenario: Display and use the Branch dropdown arrow
  Given the user is on the Borrower Contact Information section
  When the user views the Branch dropdown
  Then the dropdown arrow should be visible
  And the dropdown arrow should function correctly


TC_012 — Verify Branch Dropdown Options Are Selectable
Feature: Selectable Branch Dropdown Options

Scenario: Select an available option from the Branch dropdown
  Given the user is on the Borrower Contact Information section
  When the user clicks on the Branch dropdown
  Then the available branch options should be displayed
  And the user should be able to select an available option


TC_013 — Verify Branch Dropdown When No Branches Are Available
Feature: Branch Dropdown With No Available Branches

Scenario: Display an appropriate message when no branches are available
  Given no branches are available in the system
  When the user opens the Branch dropdown
  Then an appropriate message or empty-state behavior should be displayed


TC_014 — Verify Selected Branch Remains Selected While Navigating Within Form

Feature: Retain Selected Branch While Navigating Within Form

Scenario: Retain the selected branch when navigating between form sections
  Given the user is on the Borrower Contact Information section
  When the user selects an available branch
  And navigates to another section within the form
  And returns to the Contact Information section
  Then the previously selected branch should remain selected

TC_001 — Verify That the Name Field Is Mandatory in Borrower Contact Information

Feature: Mandatory Name Field Validation

Scenario: Verify that the user cannot save borrower information without entering a Name
  Given the user logs into the LendingWise application using valid credentials
  And navigates to CRM → Borrower → Create Borrower
  And the Contact Information section is displayed
  When the user leaves the Name field blank
  And fills in all other mandatory fields with valid information
  And clicks on Save or Continue
  Then the system should not allow the user to save or proceed
  And an appropriate mandatory Name validation message should be displayed
  And the user should remain on the Contact Information section


TC_002 — Verify That the User Can Enter a Valid Name

Feature: Enter Valid Name

Scenario: Enter a valid Name in Borrower Contact Information
  Given the user logs into the LendingWise application
  And navigates to CRM → Borrower → Create Borrower
  And the Contact Information section is displayed
  When the user enters a valid Name in the Name field
  Then the entered Name should be accepted
  And the Name should be displayed correctly in the field


TC_003 — Verify Validation When Name Is Left Blank

Feature: Blank Name Field Validation

Scenario: Display validation when the Name field is left blank
  Given the user is on the Borrower Contact Information section
  When the user leaves the Name field blank
  And clicks on Save or Continue
  Then the system should display a required field validation message
  And the user should not be allowed to proceed


TC_004 — Verify Name With Only Blank Spaces

Feature: Name Field Blank Space Validation

Scenario: Prevent the user from entering only blank spaces as a Name
  Given the user is on the Borrower Contact Information section
  When the user enters only blank spaces in the Name field
  And clicks on Save or Continue
  Then the system should not accept blank spaces as a valid Name
  And an appropriate validation message should be displayed


TC_005 — Verify Name With Alphabets Only

Feature: Name Field Alphabet Validation

Scenario: Accept a Name containing alphabets only
  Given the user is on the Borrower Contact Information section
  When the user enters a Name containing alphabets only
  Then the Name should be accepted
  And no validation error should be displayed


TC_006 — Verify Name With First and Last Name

Feature: Full Name Entry

Scenario: Accept a Name containing first name and last name
  Given the user is on the Borrower Contact Information section
  When the user enters a first name and last name in the Name field
  Then the full Name should be accepted
  And the entered Name should be displayed correctly


TC_007 — Verify Name With Special Characters

Feature: Name Field Special Character Validation

Scenario: Handle special characters entered in the Name field
  Given the user is on the Borrower Contact Information section
  When the user enters a Name containing special characters
  Then the system should handle the special characters according to the defined validation rules
  And an appropriate validation message should be displayed if the input is not allowed


TC_008 — Verify Name With Numeric Values

Feature: Name Field Numeric Value Validation

Scenario: Handle numeric values entered in the Name field
  Given the user is on the Borrower Contact Information section
  When the user enters numeric values in the Name field
  Then the system should handle the input according to the defined Name validation rules
  And an appropriate validation message should be displayed if numeric values are not allowed


TC_009 — Verify Name With Minimum Allowed Characters

Feature: Name Minimum Character Limit

Scenario: Accept a Name containing the minimum allowed number of characters
  Given the user is on the Borrower Contact Information section
  When the user enters a Name with the minimum allowed number of characters
  Then the Name should be accepted
  And no minimum length validation error should be displayed


TC_010 — Verify Name With Maximum Allowed Characters

Feature: Name Maximum Character Limit

Scenario: Accept a Name containing the maximum allowed number of characters
  Given the user is on the Borrower Contact Information section
  When the user enters a Name with the maximum allowed number of characters
  Then the Name should be accepted
  And no maximum length validation error should be displayed


TC_011 — Verify Name Exceeding Maximum Character Limit

Feature: Name Maximum Character Limit Validation

Scenario: Prevent entering a Name beyond the maximum allowed character limit
  Given the user is on the Borrower Contact Information section
  When the user enters a Name exceeding the maximum allowed character limit
  Then the system should prevent additional characters or display an appropriate validation message
  And the invalid Name should not be accepted


TC_012 — Verify That the Entered Name Is Saved Successfully

Feature: Save Borrower Name

Scenario: Save borrower information with a valid Name
  Given the user is on the Borrower Contact Information section
  When the user enters a valid Name
  And fills in all other mandatory fields with valid information
  And clicks on Save
  Then the borrower information should be saved successfully
  And the entered Name should be saved correctly


TC_013 — Verify That Name Remains Populated After Navigating Back

Feature: Retain Name After Navigating Back

Scenario: Retain the entered Name when navigating back to Contact Information
  Given the user is on the Borrower Contact Information section
  When the user enters a valid Name
  And navigates to another section
  And returns to the Contact Information section
  Then the previously entered Name should remain populated in the Name field


TC_014 — Verify Validation Message UI for Mandatory Name

Feature: Mandatory Name Validation Message UI

Scenario: Verify the visibility of the mandatory Name validation message
  Given the user is on the Borrower Contact Information section
  When the user leaves the Name field blank
  And clicks on Save or Continue
  Then the mandatory Name validation message should be displayed clearly
  And the validation message should be visible near the Name field


TC_015 — Verify That the User Can Proceed After Entering a Valid Name

Feature: Proceed With Valid Name

Scenario: Allow the user to proceed after entering a valid Name
  Given the user logs into the LendingWise application using valid credentials
  And navigates to CRM → Borrower → Create Borrower
  And the Contact Information section is displayed
  When the user enters a valid Name in the Name field
  And fills in all other mandatory fields with valid information
  And clicks on Save or Continue
  Then the system should accept the entered Name
  And the user should be allowed to proceed to the next step


TC_016 — Verify Validation When Only Spaces Are Entered in Name

Feature: Name Field Spaces Only Validation

Scenario: Display validation when the Name field contains only spaces
  Given the user is on the Borrower Contact Information section
  When the user enters only spaces in the Name field
  And clicks on Save or Continue
  Then the system should display an appropriate validation message
  And the user should not be allowed to proceed


TC_017 — Verify Name With Special Characters Only

Feature: Name Field Special Characters Only Validation

Scenario: Handle a Name containing only special characters
  Given the user is on the Borrower Contact Information section
  When the user enters only special characters in the Name field
  And clicks on Save or Continue
  Then the system should handle the input according to the Name validation rules
  And an appropriate validation message should be displayed if the input is invalid


TC_018 — Verify That the System Prevents Saving After Removing Name

Feature: Name Field Validation After Removing Name

Scenario: Prevent saving after removing the entered Name
  Given the user is on the Borrower Contact Information section
  And has entered a valid Name and other contact details
  When the user removes the Name from the Name field
  And clicks on Save
  Then the system should prevent saving the borrower information
  And the mandatory Name validation message should be displayed


TC_019 — Verify Validation When Submitting Without Contact Information

Feature: Contact Information Mandatory Field Validation

Scenario: Display mandatory field validations when submitting an empty Contact Information form
  Given the user is on the Borrower Contact Information section
  When the user leaves all contact information fields blank
  And clicks on Save or Continue
  Then the system should display the mandatory field validation messages
  And the user should not be allowed to save or proceed


TC_020 — Verify Validation When Name Is Cleared Before Clicking Save

Feature: Name Field Validation After Clearing

Scenario: Display mandatory Name validation after clearing the Name field
  Given the user is on the Borrower Contact Information section
  And has entered a valid Name
  When the user clears the Name field before saving
  And clicks on Save
  Then the system should display the mandatory Name validation message
  And the borrower information should not be saved
