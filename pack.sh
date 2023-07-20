#!/bin/bash

echo "Remove old package"
rm -rf ../xindaoversilia-react.tar.gz

echo "Create backup dir"
mkdir xindaoversilia-react

echo "Copy sources into backup dir"
cp -r components xindaoversilia-react
cp -r pages xindaoversilia-react
cp -r public xindaoversilia-react
cp -r styles xindaoversilia-react
cp -r .git xindaoversilia-react
cp package* README.md pack.sh .gitignore xindaoversilia-react

echo "Create package"
tar acf ../xindaoversilia-react.tar.gz xindaoversilia-react

echo "Remove backup dir"
rm -rf xindaoversilia-react

exit 0
