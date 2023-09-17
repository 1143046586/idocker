import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';
import Docker from 'dockerode';

@Injectable()
export class DockerService {
    public docker: Docker;
    public currentContainerId: string;
    constructor() {
        this.docker = new Docker({ socketPath: '/var/run/docker.sock' });
        try {
            this.currentContainerId = execSync('hostname', { timeout: 1000, encoding: 'utf-8' });
            console.log(this.currentContainerId);
        } catch (error) {
            console.log('获取容器本身ID失败，', error);
        }
    }
}
