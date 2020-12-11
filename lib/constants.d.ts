export interface ActionInterface {
    /** Deployment access token. */
    accessToken?: string | null;
    /** The branch that the action should deploy to. */
    branch: string;
    /** git push with --dry-run */
    dryRun?: boolean | null;
    /** If your project generates hashed files on build you can use this option to automatically delete them from the deployment branch with each deploy. This option can be toggled on by setting it to true. */
    clean?: boolean | null;
    /** If you need to use CLEAN but you'd like to preserve certain files or folders you can use this option. */
    cleanExclude?: string | string[];
    /** If you need to customize the commit message for an integration you can do so. */
    commitMessage?: string;
    /** The git config email. */
    email?: string;
    /** The folder to deploy. */
    folder: string;
    /** The auto generated folder path. */
    folderPath?: string;
    /** GitHub deployment token. */
    gitHubToken?: string | null;
    /** Determines if the action is running in test mode or not. */
    isTest?: boolean | null;
    /** The git config name. */
    name?: string;
    /** The repository path, for example JamesIves/github-pages-deploy-action. */
    repositoryName?: string;
    /** The fully qualified repositpory path, this gets auto generated if repositoryName is provided. */
    repositoryPath?: string;
    /** Wipes the commit history from the deployment branch in favor of a single commit. */
    singleCommit?: boolean | null;
    /** Determines if the action should run in silent mode or not. */
    silent: boolean;
    /** Set to true if you're using an ssh client in your build step. */
    ssh?: boolean | null;
    /** If you'd like to push the contents of the deployment folder into a specific directory on the deployment branch you can specify it here. */
    targetFolder?: string;
    /** The token type, ie ssh/github token/access token, this gets automatically generated. */
    tokenType?: string;
    /** The folder where your deployment project lives. */
    workspace: string;
}
/** The minimum required values to run the action as a node module. */
export interface NodeActionInterface {
    /** Deployment access token. */
    accessToken?: string | null;
    /** The branch that the action should deploy to. */
    branch: string;
    /** The folder to deploy. */
    folder: string;
    /** GitHub deployment token. */
    gitHubToken?: string | null;
    /** The repository path, for example JamesIves/github-pages-deploy-action. */
    repositoryName: string;
    /** Determines if the action should run in silent mode or not. */
    silent: boolean;
    /** Set to true if you're using an ssh client in your build step. */
    ssh?: boolean | null;
    /** The folder where your deployment project lives. */
    workspace: string;
}
export declare const action: ActionInterface;
/** Types for the required action parameters. */
export declare type RequiredActionParameters = Pick<ActionInterface, 'accessToken' | 'gitHubToken' | 'ssh' | 'branch' | 'folder'>;
/** Status codes for the action. */
export declare enum Status {
    SUCCESS = "success",
    FAILED = "failed",
    SKIPPED = "skipped",
    RUNNING = "running"
}
