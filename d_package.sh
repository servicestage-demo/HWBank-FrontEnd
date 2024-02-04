# serviceName='OnlineBank'

function buildPackage(){
    do
        tar -cvzf OnlineBank-static-release.tar.gz ./server/*
    done
}

function openPackage(){
    do
        tar -xzvf OnlineBank-static-release.tar.gz 
    done
}

# npmInstallWebapp
# npmPackageWebapp
buildPackage
echo "build success"
