```mermaid
	sequenceDiagram
		participant browser
		participant server

		browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
		activate server
		server-->>browser: HTML Document
		deactivate server
		
		browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
		activate server
		server-->>browser: CSS Document
		deactivate server
		
		browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
		activate server
		server-->>browser: JS Document
		deactivate server
		Note right of browser: JS code is executed
		
		browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
		activate server
		server-->>browser: JSON Document
		deactivate server
		Note right of browser: Page with json element is rendered
```