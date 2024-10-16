const { Octokit } = require("@octokit/rest");
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = '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';
const REPO_OWNER = 'venuscyr';
const REPO_NAME = 'day13';
const FILE_PATH = 'c:\Users\amako\le bon dossier\Capture décran 2024-10-03 103706.png';
const COMMIT_MESSAGE = 'Javascript added the greatest selfie ever';

const octokit = new Octokit({ auth: GITHUB_TOKEN });

async function uploadSelfie() {
    try {
        
        const content = fs.readFileSync(FILE_PATH);
        const contentEncoded = content.toString('base64');

        
        const { data: ref } = await octokit.git.getRef({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            ref: 'heads/main',
        });

       
        const { data: blob } = await octokit.git.createBlob({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            content: contentEncoded,
            encoding: 'base64',
        });

        
        const { data: tree } = await octokit.git.createTree({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            base_tree: ref.object.sha,
            tree: [{
                path: path.basename(FILE_PATH),
                mode: '100644',
                type: 'blob',
                sha: blob.sha,
            }],
        });

       
        const { data: commit } = await octokit.git.createCommit({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            message: COMMIT_MESSAGE,
            tree: tree.sha,
            parents: [ref.object.sha],
        });

       
        await octokit.git.updateRef({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            ref: 'heads/main',
            sha: commit.sha,
        });

        console.log('Selfie uploaded successfully!');
    } catch (error) {
        console.error('Error uploading selfie:', error);
    }
}

uploadSelfie();
