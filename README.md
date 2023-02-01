# State management example which fullfills the following criteria

- [x] Can store state that can be access from different component
- [x] State is immutable - use immer
- [ ] Replaces the need for Meow
- [x] One state access the other
- [x] Replaces the need for having a <provider>
- [x] Class based API
- [ ] Provides a replacement for redux-form
- [ ] Fully Tested

| Features                        | Redux           | New Solutions
|-                                |-                |-             
| Store Data Type                 | immutable       | Immutable
| Store Accessed                  | Hooks / HoC     | Hooks
| Store Updated                   | Action Creators | Via direct update functions
| Store location                  | React Context   | React External Store
| Who can access Store            | Children Component of `<Provider>`  | Any component, No `<Provider>` needed
# state-management
