---
id: google-spreadsheet
title: Integrate with Google Spreadsheet
sidebar_label: Google Spreadsheet
---

Data Reuseability to avoid the manual work is what RestQA assures to its users. The test data plays a vital role for the API testing as it contain majority of the test case data that is passed as parameters to the API.

Google Spreadsheet is one of the many data sources that RestQA integrates without any hassle. The parameters per call are just required to be entered in form of rows. Each rows represent a set of parameters being passed to API during a single call.

![](Images\GoogleSpreadSheetData.JPG)

> The Project's **restqa.yml** file will contain the details about the Google Spreadsheet as shown below **environments->data**

```yaml
---

version: 0.0.1
metadata:
  code: SAMPLE
  name: Sample running on grnconnect.com
  description: E2E test of the grnconnect public api
environments:
  - name: sandbox
    default: true
    data:
   		channel: google-sheet
   		config:
     		id: !env-var GOOGLE_SHEET_ID
     		apikey: !env-var GOOGLE_SHEET_APIKEY
    plugins:
      - name: restqapi
        config:
          url: https://api-sandbox.grnconnect.com
```



User needs to ensure the appropriate Google Sheet Id and API Key which is a pre-requisite for RestQA to access the google sheet accordingly. 

Once the **restqa.yml** is updated as per the Google Spreadsheet, the Test Suite takes it up for the next process where the columns and rows are defined accordingly.