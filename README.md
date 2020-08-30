# RestQA ![60838103](resources/60838103.png)

### Who We Are

------

RestQa is primarily developed by RestQa Labs holding expertise over Open Automation Testing Platform. 

URL: <https://restqa.io>

Twitter: <https://twitter.com/restqa>

Email: <hello@restqa.io>

### RestQa: A Brief Introduction

------

RestQa converts manual test scenarios into automated test to ease up the testing process with appropriate result published from the RestQa. 	

RestQa is an open source project specifically designed to provide test automation workflow for any Rest based API. RestQa make sure to reduce the testing challenges for the consumer by either letting them manage the RestQa framework or by letting our experts handle it for them.

![ExpertsSolving](resources/ExpertsSolving.JPG)

### How RestQa Operate

------

#### 1) Share Product Details

RestQa required the API details over which test automation is to be performed. Details include

- Endpoint URL
- Parameters
- Additional Headers
- Security Protocol details (if implemented)

![ProductDetails](resources/ProductDetails.JPG)



#### 2) Test Scenarios

------

Next part is to get the scenario details for the Rest API that are to be automated in terms of testing. The information for the Test Suite can be in form of description, video, gif, etc. 

![TestScenario](resources/TestScenario.JPG)

#### 3) Build, Execute & Deliver

------

Based on the information provided, our engineers translate the instructions into a test automation suite. 

![BuildExecute](resources/BuildExecute.JPG)

#### 4) Deliver Result

------

With in 24 hours, RestQA Automation Pipleline will generate the results and will be integrated with client's reporting environment like Slack, Elasticsearch, etc.

![Report](resources/Report.JPG)

### RestQa: Building Components

------

RestQa is build over modules that are integrate able with each other in way to to provide seamless functionality without being totally depended on other modules. RestQa is not an intrusive platform as primary aim is to reduce the learning curve by using open source frameworks and allowing contributors to enhance the code repository if need arises. 

![proposal](resources/proposal.png)

RestQa sits with Bitbucket Pipeline in order to implement Continuous Integration (CI). The aim is to incorporate automate test cycles with CI Workflow in order to scale up the testing process where each new test suite process enters into processing pipeline and generates the output over to the desired reporting platform.

![TestAutomationPipeline](resources/TestAutomationPipeline.JPG)

The **Test Automation Pipeline** for RestQa is 4 steps process.

1. **Data:** The data will be the input that is to be passed to the API Endpoint to perform the test. A single endpoint can expect multiple sets of data based on which the result may vary. The data might be in Excel Sheet, CSV based file or Confluence data sheet.

   

2. **Test Suite:** Test Suites are the functional tests representing the business flow written in natural language.

   

3. **Processing:** This is where the magic happens. The data and test suite enters into the processing pipeline which is handled by **RestQApi** which is a part of RestQa Ecosystem. 

   

4. **Output:** Post processing, the test results are shared over the desired platform like Grafana, Slack, etc.