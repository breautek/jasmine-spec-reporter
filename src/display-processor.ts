import {Configuration} from "./configuration";
import {CustomReporterResult} from "./spec-reporter";
import {Bar, Presets} from "cli-progress";
import SuiteInfo = jasmine.SuiteInfo;

export class DisplayProcessor {
    protected configuration: Configuration;

    private _progress: Bar;
    private _totalSpecs: number;
    private _progressValue: number;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
        this._progressValue = 0;
        this._progress = new Bar({
            format: "[{bar}] {value}/{total}    {text}"
        },                       Presets.shades_classic);
    }

    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        this._totalSpecs = info.totalSpecsDefined;
        this._progress.setTotal(this._totalSpecs);
        this._progress.update(this._progressValue, {
            text: "Jasmine Started"
        });
        return log;
    }

    public displaySuite(suite: CustomReporterResult, log: string): string {
        return log;
    }

    public displaySpecStarted(spec: CustomReporterResult, log: string): string {
        this._progress.update(++this._progressValue, {
            text: spec.fullName
        });
        return log;
    }

    public displaySuccessfulSpec(spec: CustomReporterResult, log: string): string {
        return log;
    }

    public displayFailedSpec(spec: CustomReporterResult, log: string): string {
        return log;
    }

    public displaySpecErrorMessages(spec: CustomReporterResult, log: string): string {
        return log;
    }

    public displaySummaryErrorMessages(spec: CustomReporterResult, log: string): string {
        return log;
    }

    public displayPendingSpec(spec: CustomReporterResult, log: string): string {
        return log;
    }
}
