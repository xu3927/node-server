# 运行的 node 的版本号
ARG VARIANT="14-buster"
# 使用镜像, 这里使用微软的一个node镜像
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

USER node
RUN mkdir /home/node/workspace
