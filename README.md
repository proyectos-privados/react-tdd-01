yarn add -D enzyme jest-cli@20.0.4
yarn add react-bootstrap
yarn add -D react-dom react-test-render

yarn add -D enzyme-adapter-react-16 

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

yarn test -- --coverage