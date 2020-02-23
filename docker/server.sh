docker build -t k-daiki/client . && 
docker run -it -p 9001:5000 -v $(pwd):/app k-daiki/server