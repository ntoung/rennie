# prettier-ignore
npx npm-check-updates --upgrade --reject husky,react-query,react-query-devtools,debounce-fn,@emotion/core,@emotion/styled,jest,chalk,faker,jest-watch-typeahead
rm -rf node_modules package-lock.json
npx npm@8 install
npm run validate