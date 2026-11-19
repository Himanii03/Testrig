# Borrower List - Test Cases

## Overview

This document contains test cases
for the Borrower List functionality
in the CRM application.

## Test Case Index

## Index

| # | Test Case Description | Status |
|---|---|---|
| 001 | Verify Navigation to Mail by Clicking Borrower/Co-Borrower Name | Pass |
| 002 | Verify Tag Functionality |Pass|
| 003 | Verify Tag Popup Opens When Clicking Tag Icon | Pass |
| 004 | Verify Available Tags Are Displayed in Dropdown | Pass |
| 005 | Verify User Can Select a Tag From Dropdown | Pass|
| 006 | Verify Selected Tag Is Saved Successfully | Pass |
| 007 | Verify User Can Save Without Selecting a Tag | Pass |
| 008 | Verify Tag Popup Closes After Clicking Save | Pass |
| 009 | Verify Success Message After Updating Tags | Pass|
| 010 | Verify Navigation to Mail by Clicking Loan Officer Email | Pass|
| 011 | Verify Navigation to Mail by Clicking Broker Email | Pass |
| 012 | Verify Navigation to Mail by Clicking Branch Email | Pass|
| 013 | Verify Borrower Can Be Deactivated Using the deactivate icon in the Action  | Pass |
| 014 | Verify Deactivation of a Single Borrower | Pass |
| 015 | Verify Deactivation Confirmation Message | Pass |
| 016 | Verify Deactivated Borrower in the Borrower List | Pass |
| 017 | Verify Deactivation of Multiple Borrowers Individually | pass |
| 018 | Verify Cancellation of Deactivation | pass |
| 019 | Verify Action tab Visibility | Pass |
| 020 | Verify Unauthorized User Access | Pass |
| 021 | Verify Page Refresh After Deactivation | Pass |
| 022 | Verify Borrower Search After Deactivation | Pass |
| 023 | Verify Borrower Login Restriction Using the Tick Icon | Pass |
| 024 | Verify Login Restriction Using Tick Icon | Pass |
| 025 | Verify Login With Restricted Borrower Credentials | Pass |
| 026 | Verify Other Borrowers' Login Functionality | Pass |
| 027 | Verify Login Restriction After Page Refresh | Pass|
| 028 | Verify Restricted Borrower Status | Pass |
| 029 | Verify Restriction When Borrower Is Already Logged In |Pass|
| 030 | Verify Restriction for Multiple Borrowers | Pass|
| 031 | Verify Repeated Clicking on Tick Icon | Pass |
| 032 | Verify Login Restriction Across Browsers | Pass|
| 033 | Verify Login Restriction Error Message | Pass |
| 034 | Verify Message Popup Opens When Clicking the Message Icon | Pass |
| 035 | Verify Confirmation Message Content in Message Popup | Pass |
| 036 | Verify Yes Button Disables Marketing Emails | Pass |
| 037 | Verify Cancel Button Keeps Marketing Emails Enabled | Pass |
| 038 | Verify Marketing Email Restriction for Selected Borrower Only | Pass |
| 039 | Verify Marketing Email Restriction After Page Refresh | Pass |
| 040 | Verify Marketing Email Restriction for Multiple Borrowers | Pass |
| 041 | Verify Repeated Clicking on Message Icon | Pass |
| 042 | Verify Marketing Email Restriction for All Back Office Users | Pass |
| 043 | Verify Non-Marketing Email Functionality | Pass |
| 044 | Verify Borrower Marketing Email Restriction Status | Pass |
| 045 | Verify Create New File Icon Functionality | Pass |
| 046 | Verify Navigation to Create Loan Section | Pass |
| 047 | Verify Quick App Page Loading | Pass |
| 048 | Verify Borrower-Specific File Creation | Pass |
| 049 | Verify Navigation for Different Borrowers | Pass |
| 050 | Verify Create New File Icon Visibility | Pass |
| 051 | Verify Page Refresh After Navigation | Pass |
| 052 | Verify Browser Back Navigation | Pass |
| 053 | Verify Email Campaign Validation Without Selecting Any Borrower | Pass |
| 054 | Verify Email Icon Functionality After Selecting a Single Borrower | Pass |
| 055 | Verify Email Icon Functionality After Selecting Multiple Borrowers | Pass |
| 056 | Verify Email Icon State When Selecting and Deselecting a Borrower | Pass |
| 057 | Verify Select All Borrowers Using Header Checkbox | Pass |
| 058 | Verify Email Icon After Deselecting All Borrowers | Pass |
| 059 | Verify Borrower Selection Across Multiple Pages | Pass |
| 060 | Verify Selected Borrower Count | Fail |
| 061 | Verify Send Campaign Navigation After Selecting One Borrower | Pass |
| 062 | Verify Send Campaign Navigation After Selecting Multiple Borrowers | Pass |
| 063 | Verify Email Campaign Permissions | Pass |






TC_001 — Verify Navigation to Mail After Clicking Borrower/Co-Borrower Name

Feature: Borrower List Mail Navigation

Scenario: Navigate to mail application by clicking Borrower/Co-Borrower Name
  Given the user logs into the lendingwise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  When the user clicks on the Borrower/Co-Borrower Name
  Then the user should be navigated to the mail application


TC_002 — Verify Tag Functionality
Scenario: Verify that the user can add a tag by clicking on the Tag icon.

Feature: Borrower List Tag Functionality

Scenario: Add a tag to Borrower/Co-Borrower
  Given the user logs into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  When the user clicks on the Tag icon
  Then the tag popup should be displayed
  When the user clicks on the dropdown
  Then the available tags should be displayed
  When the user selects a tag from the dropdown
  And clicks on the Save button
  Then the selected tag should be saved successfully
  And the selected tag should be displayed on the details page


TC_003 — Verify Tag Popup Opens When Clicking Tag Icon

Scenario: Verify that the Tag popup opens when the user clicks on the Tag icon.


Feature: Borrower List Tag Functionality

Scenario: Open Tag popup
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  When the user clicks on the Tag icon
  Then the Tag popup should open successfully




TC_004 — Verify Available Tags Are Displayed in Dropdown

Scenario: Verify that all available tags are displayed in the dropdown.

Feature: Borrower List Tag Dropdown

Scenario: Display available tags
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  And opens the Tag popup
  When the user clicks on the Tag dropdown
  Then the dropdown should display all available tags
  And the user should be able to view the tag options




TC_005 — Verify User Can Select a Tag From Dropdown

Scenario: Verify that the user can select a tag from the dropdown list.


Feature: Borrower List Tag Selection

Scenario: Select a tag from dropdown
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  And opens the Tag popup
  When the user clicks on the Tag dropdown
  And selects an available tag
  Then the selected tag should be displayed in the dropdown field




TC_006 — Verify Selected Tag Is Saved Successfully

Scenario: Verify that the selected tag is saved successfully after clicking the Save button.


Feature: Borrower List Save Tag

Scenario: Save selected tag
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  And opens the Tag popup
  When the user opens the Tag dropdown
  And selects an available tag
  And clicks on the Save button
  Then the selected tag should be saved successfully
  And the selected tag should be displayed on the details page




TC_007 — Verify User Can Save Without Selecting a Tag

Scenario: Verify that the user can save the Tag popup without selecting any tag.

Feature: Borrower List Optional Tag Selection

Scenario: Save Tag popup without selecting a tag
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  And opens the Tag popup
  When the user does not select any tag
  And clicks on the Save button
  Then the user should be allowed to save without selecting a tag
  And no validation error should be displayed




TC_008 — Verify Tag Popup Closes After Clicking Save

Scenario: Verify that the Tag popup closes after clicking the Save button.

Feature: Borrower List Tag Popup

Scenario: Close Tag popup after saving
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  And opens the Tag popup
  When the user selects a tag if required
  And clicks on the Save button
  Then the Tag popup should close successfully
  And the user should be able to view the details page




TC_009 — Verify Success Message After Updating Tags

Scenario: Verify that the success message is displayed after updating tags.

Feature: Borrower List Tag Update Message

Scenario: Display success message after updating tags
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And opens the Borrower/Co-Borrower details page
  And opens the Tag popup
  When the user opens the Tag dropdown
  And selects an available tag
  And clicks on the Save button
  Then a success message should be displayed
  And the message should say "Tags updated successfully."


TC_010 — Verify Navigation to Mail Application by Clicking Loan Officer Email

Scenario: Verify navigation to the mail application by clicking on the Loan Officer Email.

Feature: Loan Officer Email Navigation

Scenario: Navigate to mail application by clicking Loan Officer Email
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Loan Officer → Loan Officer List
  And opens the Loan Officer details page
  When the user clicks on the Loan Officer Email
  Then the user should be navigated to the mail application


TC_011 — Verify Navigation to Mail Application by Clicking Broker Email

Scenario: Verify navigation to the mail application by clicking on the Broker Email.


Feature: Broker Email Navigation

Scenario: Navigate to mail application by clicking Broker Email
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Broker → Broker List
  And opens the Broker details page
  When the user clicks on the Broker Email
  Then the user should be navigated to the mail application


TC_012 — Verify Navigation to Mail Application by Clicking Branch Email

Scenario: Verify navigation to the mail application by clicking on the Branch Email.

Feature: Branch Email Navigation

Scenario: Navigate to mail application by clicking Branch Email
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Branch → Branch List
  And opens the Branch details page
  When the user clicks on the Branch Email
  Then the user should be navigated to the mail application

TC_013 - Verify Borrower Can Be Deactivated Using the 3rd icon in the Action

Feature: Borrower List Deactivation Functionality

Scenario: Deactivate a borrower using the icon in  Action
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies the borrower profile that needs to be deactivated
  When the user navigates to the Action column for the selected borrower
  And clicks on the third icon under the Action column
  Then the selected borrower profile should be deactivated successfully

TC_014 — Verify Deactivation of a Single Borrower


Feature: Borrower Single Deactivation

Scenario: Deactivate a single borrower
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies an active borrower
  When the user clicks on the third icon under the Action column
  Then only the selected borrower should be deactivated
  And other borrowers should remain active

TC_015 — Verify Deactivation Confirmation Message


Feature: Borrower Deactivation Confirmation

Scenario: Display confirmation message after borrower deactivation
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And selects an active borrower for deactivation
  When the user clicks on the deactivation icon
  Then the borrower should be deactivated successfully
  And an appropriate success message should be displayed


TC_016 — Verify Deactivated Borrower in the Borrower List


Feature: Deactivated Borrower List

Scenario: Verify deactivated borrower visibility in the active Borrower List
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies an active borrower
  When the user deactivates the selected borrower
  Then the borrower should no longer appear in the active Borrower List
 
TC_017 — Verify Deactivation of Multiple Borrowers Individually

gherkin
Feature: Multiple Borrower Deactivation

Scenario: Deactivate multiple borrowers individually
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies multiple active borrowers
  When the user deactivates each selected borrower individually
  Then each selected borrower should be deactivated successfully
  And other borrowers should remain unaffected

TC_018 — Verify Cancellation of Deactivation


Feature: Borrower Deactivation Cancellation

Scenario: Cancel borrower deactivation
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies an active borrower
  When the user clicks on the deactivation icon
  And the deactivation confirmation popup is displayed
  And clicks on the Cancel button
  Then the deactivation process should be cancelled
  And the borrower's status should remain Active

TC_019 — Verify Action Icon Visibility


Feature: Borrower Action Icon Visibility

Scenario: Verify action icon visibility based on user permissions
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  When the user views the Action column
  Then the action icon should be displayed according to the user's permissions
  And unauthorized actions should not be accessible

TC_020 — Verify Unauthorized User Access


Feature: Borrower Deactivation Authorization

Scenario: Prevent unauthorized users from deactivating borrowers
  Given the user is logged into the CRM application
  And the user does not have permission to deactivate borrowers
  And navigates to the Borrower List
  When the user attempts to deactivate a borrower
  Then the system should prevent the deactivation action
  And the borrower's status should remain Active


TC_021 — Verify Page Refresh After Deactivation


Feature: Borrower Deactivation Persistence

Scenario: Verify borrower status after refreshing the page
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies an active borrower
  When the user deactivates the selected borrower
  And refreshes the Borrower List page
  Then the borrower's updated Inactive status should persist
  And the borrower should not appear in the active list



TC_022 — Verify Borrower Search After Deactivation


Feature: Borrower Search After Deactivation

Scenario: Verify borrower search results after deactivation
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies an active borrower
  When the user deactivates the selected borrower
  And searches for the same borrower using the search functionality
  Then the search results should reflect the borrower's updated status
  And the borrower should not appear in the active search results


TC_023 — Verify Borrower Login Restriction Using the Tick Icon


Feature: Borrower Login Restriction

Scenario: Restrict borrower login access using the Tick icon
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies an active borrower with valid login credentials
  When the user clicks on the Tick icon under the Action column
  And logs out from the admin account
  And attempts to log in using the selected borrower's credentials
  Then the borrower should not be able to log in to the application
  And an appropriate error or notification message should be displayed
  And other borrowers' login functionality should remain unaffected


TC_024 — Verify Login Restriction Using Tick Icon


Feature: Borrower Login Restriction

Scenario: Verify login restriction after clicking the Tick icon
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies an active borrower
  When the user clicks on the Tick icon under the Action column
  Then the selected borrower's login access should be restricted successfully
  And the borrower should not be able to access the application


TC_025 — Verify Login With Restricted Borrower Credentials


Feature: Restricted Borrower Login

Scenario: Prevent restricted borrower from logging into the application
  Given the borrower has been restricted from accessing the application
  And the borrower has valid login credentials
  When the borrower attempts to log in to LendingWise
  Then the system should deny access to the borrower
  And the borrower should not be redirected to the application dashboard

TC_026 — Verify Other Borrowers' Login Functionality


Feature: Other Borrowers Login Functionality

Scenario: Verify other active borrowers can log in successfully
  Given one borrower has been restricted from accessing the application
  And another borrower has an active account with valid login credentials
  When the active borrower attempts to log in to LendingWise
  Then the active borrower should be able to log in successfully
  And the restricted borrower's login restriction should remain unchanged


TC_027 — Verify Login Restriction After Page Refresh


Feature: Borrower Login Restriction Persistence

Scenario: Verify login restriction after refreshing the page
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And has restricted a borrower's login access using the Tick icon
  When the user refreshes the Borrower List page
  Then the borrower's login restriction should remain active
  And the restriction status should persist after refreshing the page


TC_028 — Verify Restricted Borrower Status

gherkin
Feature: Restricted Borrower Status

Scenario: Verify borrower status after restricting login access
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies an active borrower
  When the user clicks on the Tick icon under the Action column
  Then the borrower's login restriction status should be updated successfully
  And the appropriate status should be displayed in the Borrower List

TC_029 — Verify Restriction When Borrower Is Already Logged In


Feature: Borrower Active Session Restriction

Scenario: Verify login restriction when borrower is already logged in
  Given a borrower is already logged into the LendingWise application
  And the admin user is logged into the CRM application
  When the admin user restricts the borrower's login access using the Tick icon
  Then the system should handle the existing borrower session according to security rules
  And the borrower should not be able to establish a new login session

TC_030 — Verify Restriction for Multiple Borrowers


Feature: Multiple Borrower Login Restriction

Scenario: Restrict login access for multiple borrowers
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies multiple active borrowers
  When the user restricts login access for each selected borrower individually
  Then each selected borrower's login access should be restricted successfully
  And other borrowers' login access should remain unaffected

TC_031 — Verify Repeated Clicking on Tick Icon


Feature: Borrower Login Restriction Action

Scenario: Verify system behavior when clicking the Tick icon repeatedly
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies a borrower whose login access is already restricted
  When the user clicks on the Tick icon repeatedly
  Then the system should handle repeated actions appropriately
  And no unexpected status changes should occur
  And no duplicate or unexpected error should be generated


TC_032 — Verify Login Restriction Across Browsers


Feature: Cross-Browser Borrower Login Restriction

Scenario: Verify restricted borrower cannot log in from another browser
  Given the borrower's login access has been restricted
  And the borrower has valid login credentials
  When the borrower attempts to log in using another browser or device
  Then the system should deny access to the borrower
  And the login restriction should remain active across browsers and devices

TC_033 — Verify Login Restriction Error Message


Feature: Borrower Login Restriction Error Message

Scenario: Display error message when restricted borrower attempts to log in
  Given the borrower's login access has been restricted
  And the borrower is on the LendingWise login page
  When the borrower enters valid credentials and clicks on the Login button
  Then the system should deny the login attempt
  And an appropriate user-friendly error message should be displayed
  And the borrower should not be able to access the application


TC_034 — Verify Message Popup Opens When Clicking the Message Icon


Feature: Borrower Marketing Email Restriction

Scenario: Open marketing email restriction popup
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies a borrower profile
  When the user clicks on the Message icon under the Action column
  Then the marketing email restriction popup should be displayed
  And the popup should contain Yes and Cancel buttons

TC_035 — Verify Confirmation Message Content in Message Popup


Feature: Marketing Email Confirmation Popup

Scenario: Verify confirmation message displayed in the popup
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  When the user clicks on the Message icon under the Action column
  Then the following confirmation message should be displayed:
  """ Would you like to disable ability for back office users to send marketing E-mails to this borrower? This protects broker relationships"""
  And the Yes button should be displayed
  And the Cancel button should be displayed


TC_036 — Verify Yes Button Disables Marketing Emails


Feature: Borrower Marketing Email Restriction

Scenario: Disable marketing emails by clicking Yes
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies the required borrower
  When the user clicks on the Message icon under the Action column
  And the confirmation popup is displayed
  And clicks on the Yes button
  Then marketing emails should be disabled for the selected borrower
  And Back Office users should not be able to send marketing emails to that borrower
  And an appropriate confirmation message should be displayed


TC_037 — Verify Cancel Button Keeps Marketing Emails Enabled


Feature: Borrower Marketing Email Cancellation

Scenario: Cancel marketing email restriction
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies a borrower whose marketing emails are enabled
  When the user clicks on the Message icon under the Action column
  And the confirmation popup is displayed
  And clicks on the Cancel button
  Then the confirmation popup should close
  And marketing email permissions should remain unchanged
  And Back Office users should still be able to send marketing emails to the borrower


TC_038 — Verify Marketing Email Restriction for Selected Borrower Only


Feature: Borrower Specific Marketing Email Restriction

Scenario: Restrict marketing emails for the selected borrower only
  Given the user is logged into the CRM application
  And multiple borrower profiles exist in the Borrower List
  When the user disables marketing emails for one selected borrower
  Then marketing emails should be disabled only for the selected borrower
  And other borrowers should remain eligible to receive marketing emails


TC_039 — Verify Marketing Email Restriction After Page Refresh


Feature: Marketing Email Restriction Persistence

Scenario: Verify marketing email restriction after page refresh
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And has disabled marketing emails for a borrower
  When the user refreshes the Borrower List page
  Then the marketing email restriction should remain active
  And the restriction status should persist after refreshing the page


TC_040 — Verify Marketing Email Restriction for Multiple Borrowers


Feature: Multiple Borrower Marketing Email Restriction

Scenario: Disable marketing emails for multiple borrowers
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies multiple borrower profiles
  When the user disables marketing emails for each selected borrower individually
  Then marketing emails should be disabled for each selected borrower
  And other borrowers should remain unaffected


TC_041 — Verify Repeated Clicking on Message Icon


Feature: Message Icon Functionality

Scenario: Verify repeated clicking on the Message icon
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies a borrower profile
  When the user clicks on the Message icon repeatedly
  Then the system should handle repeated clicks appropriately
  And duplicate confirmation popups should not cause unexpected behavior
  And the borrower's marketing email restriction status should remain consistent


TC_042 — Verify Marketing Email Restriction for All Back Office Users


Feature: Back Office Marketing Email Restriction

Scenario: Restrict all Back Office users from sending marketing emails
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And disables marketing emails for a selected borrower
  When different Back Office users attempt to send marketing emails to that borrower
  Then all Back Office users should be restricted from sending marketing emails
  And the restriction should apply consistently to the selected borrower


TC_043 — Verify Non-Marketing Email Functionality


Feature: Non-Marketing Email Functionality

Scenario: Verify non-marketing emails after disabling marketing emails
  Given marketing emails have been disabled for a selected borrower
  And the user is logged in as a Back Office user
  When the user attempts to send a non-marketing or transactional email to the borrower
  Then the system should handle the email according to separate email permissions
  And the marketing email restriction should not unintentionally affect other email types


TC_044 — Verify Borrower Marketing Email Restriction Status


Feature: Borrower Marketing Email Restriction Status

Scenario: Verify marketing email restriction status
  Given the user is logged into the CRM application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies a borrower profile
  When the user disables marketing emails using the Message icon
  Then the borrower's marketing email restriction status should be updated
  And the updated status should be reflected in the application


TC_045 — Verify Create New File Icon Functionality

gherkin
Feature: Borrower Create New File Functionality

Scenario: Navigate to Quick App by clicking Create New File icon
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And identifies a borrower profile
  When the user clicks on the Create New File icon under the Action column
  Then the user should be navigated to the Quick App page
  And the Quick App page should open under the Create Loan section


TC_046 — Verify Navigation to Create Loan Section

gherkin
Feature: Create Loan Navigation

Scenario: Verify navigation to the Create Loan section
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies a borrower profile
  When the user clicks on the Create New File icon
  Then the user should be redirected to the Create Loan section
  And the Quick App option should be displayed


TC_047 — Verify Quick App Page Loading

gherkin
Feature: Quick App Page Loading

Scenario: Verify Quick App page loads successfully
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  When the user clicks on the Create New File icon
  Then the Quick App page should load successfully
  And all required page elements should be displayed
  And no unexpected error message should appear

TC_048 — Verify Borrower-Specific File Creation

gherkin
Feature: Borrower-Specific Loan File Creation

Scenario: Verify selected borrower information in Quick App
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies a borrower profile
  When the user clicks on the Create New File icon for the selected borrower
  Then the Quick App page should open successfully
  And the selected borrower's relevant information should be populated
  And the user should be able to proceed with loan creation


TC_049 — Verify Navigation for Different Borrowers

gherkin
Feature: Quick App Navigation for Multiple Borrowers

Scenario: Verify Quick App navigation for different borrowers
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And multiple borrower profiles exist
  When the user clicks on the Create New File icon for different borrowers individually
  Then the Quick App page should open successfully for each selected borrower.


TC_050 — Verify Create New File Icon Visibility

gherkin
Feature: Create New File Icon Visibility

Scenario: Verify Create New File icon visibility based on user permissions
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  When the user views the Action column
  Then the Create New File icon should be displayed according to user permissions
  And the icon should be accessible to authorized users




TC_051 — Verify Page Refresh After Navigation

gherkin
Feature: Quick App Page Refresh

Scenario: Verify Quick App page after refreshing the browser
  Given the user is logged into the LendingWise application
  And navigates to the Borrower List
  When the user clicks on the Create New File icon
  And the Quick App page loads successfully
  And refreshes the browser
  Then the Quick App page should remain accessible
  And the page should load without unexpected errors


TC_052 — Verify Browser Back Navigation

gherkin
Feature: Quick App Browser Navigation

Scenario: Navigate back to Borrower List from Quick App
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And identifies a borrower profile
  When the user clicks on the Create New File icon
  And the Quick App page opens successfully
  And clicks on the browser Back button
  Then the user should be redirected to the previous Borrower List page
  And the Borrower List should be displayed successfully


TC_053 — Verify Email Campaign Validation Without Selecting Any Borrower

gherkin
Feature: Borrower Email Campaign Validation

Scenario: Display validation popup without selecting a borrower
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  And no borrower is selected using the checkboxes
  When the user clicks on the Email icon
  Then a validation popup should be displayed
  And the system should prompt the user to select at least one borrower
  And the user should not be redirected to the Send Campaign page


TC_054 — Verify Email Icon Functionality After Selecting a Single Borrower

gherkin
Feature: Single Borrower Email Campaign

Scenario: Navigate to Send Campaign after selecting one borrower
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  When the user selects one borrower using the checkbox
  Then the Email icon should become enabled
  When the user clicks on the Email icon
  Then the user should be navigated to the Send Campaign page
  And the selected borrower's information should be available for the campaign


TC_055 — Verify Email Icon Functionality After Selecting Multiple Borrowers

gherkin
Feature: Multiple Borrower Email Campaign

Scenario: Navigate to Send Campaign after selecting multiple borrowers
  Given the user is logged into the LendingWise application
  And navigates to Dashboard → CRM → Borrower → Borrower List
  When the user selects two or more borrowers using their respective checkboxes
  Then the Email icon should become enabled
  When the user clicks on the Email icon
  Then the user should be navigated to the Send Campaign page
  And all selected borrowers should be included as campaign recipients
  And unselected borrowers should not be included


TC_056 — Verify Email Icon State When Selecting and Deselecting a Borrower

gherkin
Feature: Borrower Email Selection

Scenario: Verify Email icon state when selecting and deselecting borrowers
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And no borrower is selected
  When the user selects a borrower using the checkbox
  Then the Email icon should become enabled
  When the user deselects the selected borrower
  Then the Email icon should become disabled or display the validation popup according to the application behavior


TC_057 — Verify Select All Borrowers Using Header Checkbox

gherkin
Feature: Select All Borrowers

Scenario: Select all borrowers using the header checkbox
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  When the user clicks on the header checkbox
  Then all eligible borrowers displayed on the page should be selected
  And the Email icon should become enabled
  And the selected borrower count should be updated correctly


TC_058 — Verify Email Icon After Deselecting All Borrowers

gherkin
Feature: Deselect All Borrowers

Scenario: Deselect all selected borrowers
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And selects multiple borrowers using their checkboxes
  When the user clicks on the header checkbox to deselect all borrowers
  Then all previously selected borrowers should be deselected
  And the Email icon should become disabled or display the validation popup when clicked
  And the selected borrower count should become zero


TC_059 — Verify Borrower Selection Across Multiple Pages

gherkin
Feature: Borrower Selection Across Pagination

Scenario: Select borrowers across multiple pages
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And multiple pages of borrower records are available
  When the user selects borrowers from the first page
  And navigates to another page
  And selects additional borrowers
  Then the system should handle borrower selection across pages according to the application behavior
  And the Email icon should reflect the current selection
  And only selected borrowers should be included in the campaign


TC_060 — Verify Campaign Recipients

gherkin
Feature: Borrower Campaign Recipients

Scenario: Verify selected borrowers are included as campaign recipients
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And selects multiple borrowers using their checkboxes
  When the user clicks on the Email icon
  And navigates to the Send Campaign page
  Then all selected borrowers should appear as campaign recipients
  And unselected borrowers should not appear as recipients
  And the recipient details should be displayed correctly

TC_061 — Verify Send Campaign Navigation After Selecting One Borrower

gherkin
Feature: Single Borrower Send Campaign Navigation

Scenario: Verify Send Campaign page navigation for a single borrower
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And selects one eligible borrower
  When the user clicks on the Email icon
  Then the Send Campaign page should open successfully
  And the selected borrower should be available as a campaign recipient
  And no unexpected error should be displayed

TC_062 — Verify Send Campaign Navigation After Selecting Multiple Borrowers

gherkin
Feature: Multiple Borrower Send Campaign Navigation

Scenario: Verify Send Campaign page navigation for multiple borrowers
  Given the user is logged into the CRM application
  And navigates to the Borrower List
  And selects multiple eligible borrowers
  When the user clicks on the Email icon
  Then the Send Campaign page should open successfully
  And all selected borrowers should be available as campaign recipients
  And the recipient information should be displayed correctly

TC_063 — Verify Email Campaign Permissions

gherkin
Feature: Email Campaign User Permissions

Scenario: Verify Email campaign access based on user permissions
  Given the user is logged into the CRM application
  And the user does not have permission to send email campaigns
  And navigates to the Borrower List
  When the user attempts to access the Email campaign functionality
  Then the system should prevent unauthorized access
  And an appropriate permission message should be displayed
  And the user should not be able to access the Send Campaign functionality







