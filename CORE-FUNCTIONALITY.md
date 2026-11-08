RIGHTON — CORE FUNCTIONALITY

1. Purpose

RightOn is an independent digital concierge designed to help people accomplish tasks, find information, research options, and make informed decisions without navigating complicated websites or services themselves.

The customer should be able to explain what they need in ordinary language.

RightOn handles the work behind the scenes.

2. The Customer Experience

The basic process should be:

1. Customer opens RightOn.
2. Customer describes what they need.
3. RightOn interprets the request.
4. RightOn determines what information or research is needed.
5. RightOn finds relevant options and information.
6. RightOn organizes and presents the results.
7. Customer decides what to do next.

The process should remain simple, clear, and easy to use.

3. Initial Request

The primary starting point should be a simple text entry area.

Suggested prompt:

"What can we help you with?"

Customers should be able to describe requests in their own words without first selecting from complicated categories or filling out lengthy forms.

Examples:

- Find me a reliable used pickup truck.
- Help me plan a vacation.
- Find an affordable place to stay near the beach.
- Help me compare insurance options.
- Find someone who can repair my roof.
- Help me build a storage building.
- Find a good restaurant for dinner.

These are examples, not limitations on what RightOn can eventually handle.

4. Optional Additional Information

RightOn should not overwhelm customers with questions.

After receiving the initial request, it may offer:

"Would you like to enter more information to help us narrow down the results?"

The customer can select:

- Yes
- No

If the customer selects Yes, RightOn can request relevant details such as:

- Location
- Budget
- Brand
- Color
- Size
- Dates
- Preferences
- Other task-specific requirements

The requested details should depend on the original request.

If the customer selects No, RightOn should proceed using the information already provided and clearly identify any important limitations.

5. Request Interpretation

RightOn must distinguish between:

- Information the customer explicitly provided.
- Information that can reasonably be established through research.
- Information that remains unknown.
- Preferences the customer has not specified.

RightOn must not turn assumptions into customer requirements.

For example, if someone requests a used pickup truck without specifying a brand, RightOn should not automatically assume they want a Ford, Chevrolet, or any other manufacturer.

It should search broadly unless additional information is provided or genuinely necessary.

6. Research and Information Gathering

RightOn should identify the appropriate research methods for each request.

Possible methods include:

- Search engines.
- Business directories.
- Product databases.
- Public information sources.
- Third-party APIs.
- Manufacturer and retailer websites.
- Government and public records.
- Other authorized information sources.

The system should use sources appropriate to the request.

It should distinguish verified information from estimates, opinions, and unavailable information.

7. Results and Comparisons

Results should be organized so customers can understand their options.

Where appropriate, present:

- Names and descriptions.
- Prices and estimated costs.
- Locations.
- Relevant features.
- Advantages and disadvantages.
- Availability.
- Source links.
- Important limitations.

Comparisons should be based on relevant information rather than arbitrary rankings.

RightOn should not invent prices, availability, ratings, or other facts.

8. Recommendations

RightOn may identify promising options based on the customer's stated needs.

Recommendations must explain the relevant reasons behind them.

The system should distinguish between:

- Best match for stated requirements.
- Lowest available price.
- Best overall value.
- Other alternatives worth considering.

A recommendation should never be presented as an established fact when it is actually an opinion or estimate.

9. Customer Control

The customer remains in control of decisions.

RightOn should help research, organize, compare, and explain options.

It must not purchase products, make commitments, submit applications, book reservations, or share personal information without the appropriate customer authorization.

10. Accuracy and Transparency

RightOn should:

- Identify the sources of important information.
- Indicate when information was last checked when possible.
- Clearly label estimates.
- Identify missing information.
- Disclose when a result cannot be verified.
- Avoid fabricated information.
- Avoid presenting outdated information as current.

11. Technology Requirements

Core functionality should not require artificial intelligence to operate.

Traditional software should handle predictable processes, data management, security, and structured workflows.

AI may optionally assist with interpreting natural-language requests, research, summarization, and comparisons.

AI components should be replaceable or removable without requiring the entire application to be rebuilt.

12. Initial Development Priority

The first version should concentrate on a manageable set of capabilities:

1. Accept ordinary-language customer requests.
2. Identify the type of assistance requested.
3. Offer optional additional information.
4. Gather relevant information from appropriate sources.
5. Organize and present results.
6. Provide source references.
7. Allow customers to refine their requests.

Additional capabilities should be introduced only after the basic experience works reliably.

13. Core Design Principle

Simple for the customer. Sophisticated behind the scenes.

RightOn should do the complicated work without making the customer navigate complicated processes.
