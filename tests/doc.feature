
Feature: Validator


Scenario: here


Given I have the api gateway



Given I have the api gateway hosted on "https://api.example.com"



Given I want to ignore the ssl certificate



Given I have the path "/users/1"
Given I have the path "/users/1/addresses"
Given I have the path "/users/{{ userId }}/addresses"



Given I have the method "PATCH"



Given I send a "GET" request to "/customers"
Given I send a "POST" request to "/customers"
Given I send a "PUT" request to "/customers/1234"
Given I send a "DELETE" request to "/customers/1234"



Given the header contains "Content-Type" as "application/json"
Given the header contains "Accept-language" as "en"
Given the header contains "user-agent" as "curl"



Given the header contains "Accept-language" as {{ language }}
Given the header contains "user-agent" as {{ currentUserAgent }}



Given I add the headers:
| Content-Type     | application/json |
| Accept-Language  | en               |



Given I add the headers:
| Content-Type     | {{contentType}} |
| Accept-Language  | {{ language }}  |



Given I have the bearer token "xxx-yyy-zzz"



Given I have the bearer token {{ token }}



Given I use basic access authentication using the username "foo" and the password "bar"
Given I have the basic auth user "foo" pass "bar"
Given I use basic auth with "foo" / "bar"



Given I use basic access authentication using the username "foo" and the password "bar"
Given I have the basic auth user "foo" pass "bar"
Given I use basic auth with "foo" / "bar"



Given the query parameter contains "sort" as "price"
Given the query parameter contains "name" as "john"



Given the query parameter contains "limit" as 10
Given the query parameter contains "offset" as 30



Given the query parameter contains "sort" as {{ price }}
Given the query parameter contains "name" as {{ name }}



Given I add the query string parameters:
| sort     | price |
| name     | john  |



Given I add the query string parameters:
| sort     | {{ sort }} |
| name     | {{ name }}  |



Given the payload contains "firstname" as "john"
Given the payload contains "lastname" as "doe"
Given the payload contains "people.lastname" as "doe"



Given the payload contains "limit" as 10
Given the payload contains "offset" as 30
Given the payload contains "page.offset" as 30



Given the payload contains "size" as 1.1
Given the payload contains "weight" as 1.0
Given the payload contains "body.weight" as 1.0



Given the payload contains "sort" as {{ price }}
Given the payload contains "name" as {{ name }}
Given the payload contains "list.name" as {{ name }}



Given the payload contains "firstname" as null
Given the payload contains "user.firstname" as null



Given the payload contains "active" as true
Given the payload contains "user.active" as true



Given the payload contains "active" as false
Given the payload contains "user.active" as false



Given the payload contains "list" as empty array
Given the payload contains "user.list" as empty array



Given I add the request body:
| firstname | john |
| lastname  | doe  |



Given I add the request body:
| firstname    | {{ firstName }} |
| lastname     | {{ lastName }}  |



Given the payload:
"""
{
"firstname": "john",
"lastname": "doe"
}
"""



Given the payload:
"""
{
"firstname": "{{ firstName }}"
"lastname": "{{ lastName }}"
}
"""



Given I add the form value "firstname" as "john"
Given I add the form value "lastname" as "doe"
Given I add the form value "people.lastname" as "doe"



Given I add the form value "limit" as 10
Given I add the form value "offset" as 30
Given I add the form value "page.offset" as 30



Given I add the form value "size" as 1.1
Given I add the form value "weight" as 1.0
Given I add the form value "body.weight" as 1.0



Given I add the form value "sort" as {{ price }}
Given I add the form value "name" as {{ name }}
Given I add the form value "list.name" as {{ name }}



Given I add the form value "file" as a file stored at "avatar.png"



Given I add the form value "file" as a file stored at {{ filename }}



Given I add the form values:
| firstname | john |
| lastname  | doe  |



Given I add the form values:
| firstname    | {{ firstName }} |
| lastname     | {{ lastName }}  |



When I run the API



Then I should receive a response with the status 200
Then I should receive a response with the status 404



Then the response time is under 100 ms



Then the header "Content-Type" should be "application/json"



Then the response headers should contains:
| Content-Type   | application/json |
| Content-Length | 1458             |



Then the response headers should contains:
| Content-Type   | {{ contentType}} |
| Content-Length | 1458             |



Then "Content-Length" should be on the response header
Then "X-response-time" should be on the response header



Then "X-response-time" should not be on the response header
Then "poweered-by" should not be on the response header



Then the response should be empty array



Then the response should not be empty array



Then the response should be empty



Then the response body at "id" should equal 10
Then the response body at "user.firstname" should equal "john"
Then the response body at "user.lastname" should equal {{ lastname }}



Then the response body at "$.id" should equal 10
Then the response body at "$.user.firstname" should equal "john"
Then the response body at "$.user.lastname" should equal {{ lastname }}



Then the response body at "active" should equal true



Then the response body at "$.active" should equal true



Then the response body at "active" should equal false



Then the response body at "$.active" should equal false



Then the response body at "active" should equal null



Then the response body at "$.active" should equal null



Then the response body at "active" should equal empty



Then the response body at "$.active" should equal empty



Then the response body at "user.list" should be an array



Then the response body at "$.user.list" should be an array



Then the response body at "user.list" should be an array of 10 items



Then the response body at "$.user.list" should be an array of 10 items



Then the response body at "user.createdAt" should equal close to now



Then the response body at "$.user.list" should equal close to now



Then the response body at "user.children" should not be null



Then the response body at "$.user.childern" should not be null



Then the response body at "user.occupation" should match "/pilot/"



Then the response body at "$.user.occupation" should match "/pilot/"



Then the response list should contain 12 items



Then the response body should be equal to:
"""
{
"firstName": "John"
}
"""



Then add the value "Content-Type" from the response header to the dataset as "contentType"
Given I have the api gateway
And the header contains "Content-Type" as {{ contentTypw }}



Then add the value "user.id" from the response body to the dataset as "userId"
Given I have the api gateway
And I have the path "/users/{userId}"



Then add the value "$.user.id" from the response body to the dataset as "userId"
Given I have the api gateway
And I have the path "/users/{{userId}}"



Then I add the cookie to the jar



Then I print the request



Then I print the response



Then I print the value "{{ userId }}"


