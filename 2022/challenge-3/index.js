const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
)

const input = `jLnFTjhwFTLFDGDDvLgvDssBJBbVRNZJPPJBGzBNRVJNRB
QWmffSmMZCfWrmHlCflQWfSNBpVBNbPSbbJNppcVVzzpcp
lflrqrWMmfdMlrtWWmZgDjsqwFwhFDsngnvhqs
CNBGwsWVsdWDNCCVvfPLfQfgZHPBvpgf
qhJqJlmcFnhJclllPgZjvpHpvfZpPbLn
lpMJJhhcSMDMMwws
jphtLMfVpjJRjJscMJptssnrwdNwQrNbwNzQTbcNrwQT
gSPPSqGGGrdLrNQGrr
PvWPDvWWCSSBBZPjLVDfhjsLLsDhtR
hlLwDGLNnTrbNdtbdb
ZfsvJbsJTrsttHTR
vjPQJPFcmZjVFZFvbbVcJZJPBBhLMnDBznnGMDLMwBhlmBBl
JdTJFtwHjJTzPMqPccqzjB
rggffSCvNBCbWBWt
ZsSpnnRpLStrZpTDwTVwGTJHDLdH
sZqswsrcRpCrsCsrrbtpbpDlttlFbbpGtj
LhNgNvNNhTQMhQMWhvvhfWhllbGGPbPtlPmFlDbjHHdlmg
ffNBNMhDvQDhvzhBhNTBnSzzrZCZnrsVCSwcnrCC
hHGhjLjwtFGwGhhhhtwjtlhrDBQrRBHczRcMvsBcRrDDMH
TTfbZdZbPbVCmCdmnZmCVdfrJBczMrrznvBvQBzzzcBscn
fdbPZTVVfSdmbfdvjjSGljhhtNGGhL
fMrGQbPrbnfljjzVLQzNCzVv
WcDqlSpctSJNzSFJLCzN
hBBWcHtWgWDmZlwwrsPrRTRTMrmn
ZJTVdgpzPpLVVwZgPzTPLwgWdhcWhSQCbcSbBtSWdSWchb
qnDGnNjqDqNlqsCSWhMtlMltWSQB
NnNrFQGjDRgLrgrpPr
nCrhsmVrlrzsTvsnVvmTTlpvPJPWWMPJWWPCJMPNPgPJMjJj
ctDqBLHLRLBSBqFRDBFqFFNGgjjrGGMrWftWJPGgwfGN
HFcqZqqdcFQRQBdrlnplhspQlTmmvlph
mllQMvMTMMdNNdTzTGmLgWjBgGtBqWHhGWjHtB
PPsbbZPCVfJFJRJZsBHjjHhHcjqSSWBt
wCVJFVRJDDpCPqZlTlwQnrvzmMdmml
JfCJtCwfsffBJmFmgFmFhhdwgV
lzHzsSHvSRlDRjlHTgqVVmmVPZqqmggmqS
GzNNRTWvbWGvGQtfLnbfMbJfsC
FnPrwqrFqsPrrsrwqwnbZFPwBQMhhdBHQZhTVBMdDHVhQQVh
zlLWlLvLgtgbMdhfVDdzfd
NWRNjLmWblGFsssNnSwPsw
gnmCjzwnmCPTPhBwPjzBgqPjllJJSWlhfhQDSrpJRhDSlfJl
rLHNHrLHVNbVHMMctZFHsbcsDSDWpSDSGfSRsRWSRllfGSSG
NNtdMVrLNdZNvLvLZrzCndqBgwwPmwgjggBn
tGSBRwwStBftfBHRScHwfcrCgQgDnjQhQDqgBqgCCDnnqg
LNlbZmlPVNzWlLZVFPQqgDTQTmjqCQDQqmsQ
bpZNZLNNZlLNLZNNZbLlbLZbwrwSHGJSwrGwRtRpcjjtMttw
JvGNPWhLPLBffwhGCrbgnFDbgcZwbVnb
TqzSTlQzdHQQpTTjSddHTSnbqnZDcrrFnFVFVbVVcbhc
mlpdjhhTHWBmWWBJvG
ScrppccsbMRRvltvrvrj
HRTVTnDwDLJJJZwwVQTmNlvqBNtvWBBBQvhNfqlB
TLJdLLCJZHJCVHHTwRdcsGpSbgsczcdcgS
tffHzJctHsSHHHGTtzvttZFlZZhVjglVmgDhDdjgjS
qCBMCqbpqfQPMBPpPljQVDDZdddZdgFlDV
fWwLfbbWNzGGrzvWHJ
VnNFqrrJdfQhCDFPhttD
pGpTTzHmRTNTTLRRtbBBbzhPtbtbPPBt
HLpHpmSRHTpllcLTSgVvNrJVfJvqMnZN
tHzgwJCgzZlLFLnWJTnc
NnNnmsMnBDFSFWdqssFd
mDMBNmRRjjMNnvrPnjjRQQvfRgwpgHHpppHhZbzfCpbHtH
TTwBnnZwBnNQZZWLWTTFNFbsCGrGFCNvDDDGFj
lzPRfVVRMclPRMRcbFDjfCCGvvsdGCDd
hSmmlMlVztlhRlVbqQpLnWqSqLZZwZQT
zzVTcqmVqzdmhZJbFpQZQQtLLWLLbp
TGwvGgTnGTRHLNtMftWHNbWf
vljTGwvvlCljsgSnCBslDPPJrPdVzrSmhdqhVDPP
LzCGCGLBGNlLmFFmmSSBBqSc
ZJfbdfbWtbgVlblJtjcFcqTmFqqjtFHtjj
QgZhZgQVdlfddlWPhfvMCGRGPDMMRvDNGvND
nLdpLJSSnLMwjCDwnQhw
NZGNgmsgPtPTgWqqCGwRbrDCQbCwhMjr
gNqPTqTPttPZqcWfHLlBvccFvhpvJc
GNdGhMMvRBjmMVjM
trcZJJFmCgfZtcrQCfCZSpqSRjBQpQRQBbBqsSqR
JcTmwtTtcrmThLGDhNTThvNW
ZqhmtzzfZRsSfRmSTThMpLNgpgJQThMG
jdnvdHWFvvjFdCWFrvVVnvFDQrJJMpgMJGNLJNJTPPgQGJGR
vnHjDVHBWjdncDRbRzzzmmBsSSzt
VZNZSCPTJPpvNTNsCrbnVrLccbLnnRVfWb
MlqQBlBztFlhQJdFhccbhnRWWfnggfGc
lzJqllwQtmzdHZpvwjPPNspj
wTnCMnwQCQvTTJdfqhdtrrSmhttmmm
LZlZglZBvjgbHHSrHpbr
GWvPjPNGljBzMzJVMwNJMw
CSlChlvPPGvdddqPqSJhPdbNbcMTMTbDbcRNDFcFLMLJ
HWjgngmBZGQgRRNbFRcHbbzT
BmnpnQBBssBsQBnPptSStllGhdCGrS
nhQCnCvjchBBjMNrwbRwZvvSvSWW
qgHlfqblVbPfVqlbGgPGfdfLSdNssWWLZsNsLZsdNdLSZZ
gbGHzzbzHtPfcJhczmMnQBJn
TTGJJPPZJGRzDwtQjTjzDC
VbnrmNVWVWbffbVMsrbrnvFRjzCzQCjvQDDStDFS
MhrRfMmfMmsHgsqPLLGdBqJJGHqd
FMCMbmSQTHdCBmpFHprdHcDNqqfqJdJsDcclDDZlNf
wzwRjwwtRhnzjRBWRnvtnWtnNsfsVDlDlsqVNNNqcqVlDvqf
PtnGWjtwLBwtjCFPFpMpMbSrQm
PWzrtrtzBBfjjWGbfNWvLJLgVSjRLVlSlllLpS
HhZmHGGhGZRpQlpLpL
dTdnHCnhmhcHcntrPPGfzfrcNtPz
PfmWWWPwWdPdWPTVCdpjRnzhjDbrFnGbnQGQrrDR
LSBnZLnJBQDLRGcQGc
NHNqqBqvMMBsJgNvgsstBHNsdwwfTtwdpfTTmVmnWmtmWVlp
zjzwTHCzDzbDzNTDjzDCCHRZmmSGmfgPmZGtHtgLmf
hsqJMcQltLtPhLgL
QWWWcMsWFJssrnsWrdlcPBwNTdzwTvvBvjwpTbBzpT
LRvWZdLzzZWSqdpBzLdzLgRmbHPVHtFHMFFMCtHCfHcbVcqb
sGGjNDnGTnlSSwsrTwcFVMHwCPPPcVfVHwPM
GDQsDlJlQhSDTrpvhhWBLWvdRvWh
sWhhdhdhbHSVBbFLZLnnCmCmtTTCCV
RcQvjNrcrwGNcGNRJJmTpppgCCgppNgTtFmp
GRRRGRGclfjwRsbfHFhWBDhdFs
jfRTfgHqgDZHClcPcrGhnbcqrr
FztdMLGBzpFJpcnzzclblcnbbl
pdNBtdNLdvsNtdLpdGLTZDTgDjmvCZjCRCDDHg
bdrbdZbJtZhrMrWRHHvRHRvHllqZ
GGjCNgDVDFsCCwFNHjlrPrlSRWPcSlvl
CNVDgDwVrQggDDQVsDwNwgTQdJtbfbLhtTdtLmnfbJMntnft
mjznjLchnPPcLLnwCTFFvPgJJWdqJqJJdJJr
bMlQRzbSBbRBMlMfMBBZFrqggvVvfqdDVDVDWWFd
ZSSsRGQtSpBBpZMSbSpZsbtsjhCHTHcLCcjzjCwTTHhmNHtT
ThCHLCfVfDTtDnDppTqclFfSclNrwNPwNfFr
JmsQjJPJMWRRMddZGZWsdsMZrmcqvNSFSwrScrvwSwcccFFw
ZWdJQGGzPJsMRZBGtHLgCHTTVTLBDtgn
JVGJfttHgTLVTsnHgVHfwVBDjQDNQSjQwjbNbQjBbddS
rPvZcZpcvtzcZddmNQjWQSjDpp
rrRZPzRMztFFFqMZFtRVgnsLnVHfVHqJnghHJL
grrZZbJSggQDLgrvSSDBVsGdjHjnGnBGVsLGHj
pCtWtPtffPRcWdBsGsGRBRvhBj
zmvNNclfZJJFZQbN
DDqCgPPDgtDSPPDbgCqcmBMBTQLQZBWwQZbsMWZZMw
RNlNvpvNvndNjMZtBpwMTWLBZt
VlNJvRzdlGFRFGRRRjFVJRRggtPPHgHzgStqCcHHmHqcrc
RfmdFgbtFLHlsjRPsL
LqrhvCTvNNhWBvBTrThrDWZrPjMQPQMcjzsPcQHTlVHQjcMM
BhhrJWJLvCbfJbwgtgJn
FWpRfFRjtjFpVvbTTZFPhJhJLdCLdWBhPmHmCW
McMzNlGrgGGsHcqmdLqbhJmd
lNMwsnMzzsSSGtVVSfvZTtSppb
JrJQDJDVvGwGVwvcGCRRcCBBqsWBRZqWZZ
bNdmhvMpjmHbNbpNvmbBqlRWlCtCqlRZqRtW
HmTjNdmMfTTVvLSzvz
WMQWmfGfQfVnMGWGmGtGWHzZtdLzpZhwrtZcwZzdps
jBgljNPbNjPFRbggNlNBCcHsrLLLHlrLslhlzdhdHppp
BBPBJbFCTGJcVQMGMv
fdmfmmjbPmjlmfhfGglTNLCNvPNSpPvpvSLCPCpS
MtJwMrwrZJVHMgqJHtwVJzVVLCvpNLvDrLvQSQSNcCNpFNLS
wWMVWZzqqMRHztwJZzRqVtjGlBdhbGGbThhTlnTBTWgb
ShhrjPrvhlljnHrggPvvSqRMBZZqBTZmMmTmTMdD
ctLzbcpWCJbNWRQqBBdZFMBdfZdJBm
GQWpzLcVpVNpRggHrhhgvnGPwj
PdzSrmmqSgWWddNQds
TZbwCTLZbHLWptQHhpgNsc
MZjBLjMLDTDqrrGflsjjrf
DBHTnlGGBPjPmwRWhn
hgLgZccSrcMgLMSpCLJjNWmPWjmVWdwJjd
MfQMScQrMSprrTGHBhqTvqlGQT
CDvLRCCzQDWzcGQGvRcpVFVsgTsFrgllrTpF
mjbqtHqHbspspnMv
ZvvqdqqHvLhDhJWzJd
ThHnbRTVbQHSWvBVVBCPBW
FFJgfqfqNwNrvDCBNppP
jzsFfqwqssLzJjffJcssHQHQdnMdhTGHLbddbCnn
gwMHHhbSwnqHrgMqMbnBcldhzBLQBQhBLtLttQ
dCRmpfvpCzcQllflQz
TjPsCJmvZPNPsvZpPTTRCpprjdbrHngqDwqMrDnMbMbHgM
CgNQpgTCgNltHTNQlHpRnRnzBfJnPnmpcpfq
LGrrvGSMGvrsWPBmnJPmPfmrqr
VGsSvdJvbSHVtlttNVHT
LnZDtzpzNpPsCbfBbDCDBC
gSGRSSghqhhSvSRvvhvVqFJdsfBsCHJbVfddCJ
vglRRjQSmnQQCNrL
HwhVddVVwRcGHGjlfS
MbBvDBGvWqpNWvMbzDMNZZlLcjlSclflcjqgfCRg
bvDWDWQbspPPWWQMnGdnFnJtJFGJhhPJ
nDJDdQdPDlDJnnbRQDlTqVfFwfVtjJjjFfqqFqgN
hScrSmSCTZvZCSmZLFwfffqgjfhNGwjhfw
zCzsCCTcMBmSLmsMWHdPWRQPQPddDQ
lzGflPZLSqSlccpqjpdNCwjdsjCnCsJp
VghPQDVMFQNdJjRNBw
tVrhDVmHTlPlGrzL
gfSJJlzvGgRPpggR
VLDDHhHtlZnnZqbGmtqPmmmmWN
VVDBnddDBFFzlscC
cmmzRzcRjFrGncTHqc
ghJfwJJvqhbrdndWgddWBH
fQbSpJwSthbhtvpCwqQbsDPMNLlpRmplzPlRMPzM
bBVQDgBpTzbhpgQVhTmBVBzgrvcnrncsnZrwzHJZfnHcZfrP
tdWlFLMHGFGRGMRLNFHlfwJcrPwcsnfwcvZPfr
RLWGjHLjSjtjmBQVgpQhhg
ttRRJBrCfpprmFqSJVTSwNJNTWlVTn
nLsMghDbQdnhwWNLjcwNSlVH
ZZDgnDQvDdndPCmfrRqzvFqpmp
PPzCrcGGlnhPcsdfNZZdpLLNZsfd
RjjWHjVWDvjWqVMHjHJjVlHdwwJbLfNZdfdgfpppgpfpZw
lBVvqjQqBDBlVmCFGChhnSmTTrmr
BZnGZFvGvBGGrwLBZlzNgmzMhMdfmwgmdmmt
cpDHtVjDWjCtDTCcDNhhzNJszgzMTJhmgg
VWWcRWDpPDPPtHtScqFrLlBFFFSFBqZLSF
qBFcCGFcHHGBldzBLtdzSrdR
fpmfpswfQNQmfPHfPPgJNwRtngTtSTRzdTrLRnSnldLd
fsHNpNPwQZwhVHMFGqvvMcqWFGVF
FwFJlqDDwwgFHQdmFmSQ
pPtzcrLHZrQfdsBsdLdf
bHrrHjbrjbrJvDvbqMVNqJ
WVVpPHPfWnHmpccpnpvQcrgNNMSCTMjMgjjMMN
RsZbhRFTDDJtZFJhTLRRLMrMrCdSNCdSMjrNhjNGSQ
LLqtqqzwqmmflPTq
mmLhdZSdqhqnqMZShLQrMWcrcWQwTgrWVVWc
CCvjjsfJRCCJbDbFsbGJvzgWWGlWrWlwTQrwQGGcHlBg
NRDbRCNsNjQPSSLZNdLn
cmVLcQZPSHBGlSddBf
DFNzDNszlbBlgHNN
tWRzFjsWWtrtlDztzwjDjThLPhRMpppLMhmMhnmncRcn
LFFcgdNLpLQggZQMFMcNJggRHCHsTtRtHTzCTZHRsfSRfs
qnhlhmGrrhhnqdmGhdhWbnSRzSfsBRSTSRtBflRffzfz
PnbmrmGjWMVNvdPFLp
swcWsMMmVwWwFtWlbnnZnFBhbNfrhN
dQLZHjpDQCfBBBBTGTTC
DJvDpDSzSDQZMWsWwPqVtwcS
NVTMjjGGNBqhNttdTTjtcqjCfDlhZhSWCFFJmSmZmWJhmZ
rznsHPnRLzwspZDWfGZJSLZZDC
QzPRRvRQszQsGQcVNqTBBdVj
rHGBglBNLpbqCgFC
PbmbRnmMSbRPDWRnDVSMPMWmvvcvqqppTLZZFpvCpczLcCVv
dsdMSPtMdPnSffQwGGsBBbQw
nqjTlGPGnqWsMPPwGdGjQvQvJCCQBvmvCvQJtmCw
DDhVbDrcVVFZLzHrZBRNCWStmQWztJvtCm
VHDLhFFDpcHZcHGWfsGlspTTMqps
FTPZwBzHHFLTTSwHLJTwVQqnDrzgRRVgQpDVRprn
jJMjsWlvQqVrqgWW
CjNsjjvlmslbcJmmbtCtCThdwhHLhhhLPdBCSPFh
jfgllWfLrfmlTjsCjcjDNNDnNcHJnd
MMBRSRZGppGFpBbbBGvVnFHhcCJqNcNcHCFNgnnn
pMZZgBRVZVGRtRSMbMbvRQmTswWfzLzLzWLrPQmfwLlW
tzpdHLNpfpPnlNFHnpssbgShtqcgTTggrsqg
JZwWGCWMCcbsSHgWjq
QCmDZCJwmvZvCVCVRQGCDMFBNlfHmfLLzPPfdpfBLlPB
PCvRTdPPBVBTGgLGrGqMrMnv
twQwStrsQwstjSHmmpqZpwqNGnGnNnZgLN
mJScfjbttQjQtjcmfbbQJHFTBfdfRhhrPhhTfPVVhPPB
DMPJmLLjhJwNBCNBww
TpccnsZsbTHpsTHVszbpbGHSNwBtWlfrtCtCfrtlBlFZlf
HsHvccvzbqsGzqnnHvLQPghQNNDDvLLjdjLR
zmgVMrrjjMGbbzzdqqrgVbRTHqTTThpNHphNTvvvTNnv
QLSmZmSJTvTnZTvn
SfDtDDmQCFDwWmSrjPPGfjMjjGfMgV
hdNHNHjnGHMTcpWlhBchRBJR
fPztCTPtttLwLzVbwqSVtCBBDpWvlcRRlBpbDBQWcDWJ
ftrCVzfTCFFzTFPrPjNZFHnNsMdZgjHdss
TVcTbdqLqzHHRNHM
PppQTWffPfCPQSsCprzRwRJDzMDzNwRBRPHN
pjCTZjTjmTtsZhGcGdLvdlgv
VJRhVfJRBgbdrrrvJpJJ
cCSSHSHnZPwDFNHCDCQdbQQdvqnMsrpqQnvq
NFFCwSrDzCNrwhtgzhWtBhgzWB
RRBRczzcvmfzVRzVPvPTlCWnnlTGqGMgTTnG
tNLdSdNSMFhsFttddtjlwGqllqQglqTWqwnThT
rLSsLrNdZbbHjLdSFFMjLLtSfVRJzVJJVZcRfvZVRfDpVvRz
DBsdssbdbDfPnnqzzJbqStqzjjJS
RcGMGwwmrJjFFHPG
mCgwMLPgCPmmwWDBDZvWvBCWfZ
cJCGJJMZcMGWMhWCJTfFSfDmmgFmtshggffr
vBVQBDbNstQmFsfm
RVwHNblzwHvNdvBwNjVHGZJZLJTMLMJDZLGRMDGG
LNCssCldDbrnNtVWNQ
mmcpRBMBRBTZzgMMhtFFvrWQrQmWFtvn
MZTgzMZSzTfSMDHwCfPlLLDnwL
HlPcjMSHsMSPbgLhFPFNzP
ZfRhtVdGBNLFzLqf
DRtGGtRGJJTJDZDGdCJrVJmlWvHWcvjMsMWmhQsmCMjW
swpQcsBvvHFpBHHcCHJvJddvbbWPdzhzzqqWdhPnhP
gDDGTgjNWZTMTNjjggRLggldSPqSqGznnhnbdfnbqfhh
WDMDtDNDctVFJstJ
rFDbGjrGbpBBbrCbrwpvvZQZZhgTLVVVVLgThCTggg
NlfHpttqzltMzRSMSdWRNSfSTTmqgcLgQVcQTcmgQgmZVPVZ
HWSWpMHNpNWlpNMsMzWGGwwBvvwBnwBvsnnvnB
mZVVHmmRZlvdjvNpHh
DFBnFDtnFbBMrQbBMvFLvgtjjNpcLpJdNzJJdhWNpJNWcN
QTsbrQggBsvsgVTwRVGZCfGZfR
RGNGlGTWJnJlMcRMGqvSmnDtvDDvtLSLvr
HfsFhPPdVshfbggDVmzcvSwvStVzDq
BPPfCgCFfcBbPbHbBHZPFsbBpMGlClRNJRlQTjQWjWpTTlGT
HQNqQbbRQHbZPZQPqbZTvWFWmCjvFRvRTSrRrr
lBpBpzLLdBwsLwLLWNggzCFTCmFgWmrF
VwsswGVBfJfccLBcsJGNdpJHZZqnhtqqnhPHDZHVtPQMZn
LMHnHnPMnFdJFNFJjZvrJF
wlTlslptlwtzcvTqvTsVSWWrbJfmJZNZJjcNWfNJmf
qDlqVthTztSSpSlqtpTTzLvRRnnCvRCPLBQGDBdDGD
HlmlJgRBBpJLpPBHnlLJsrgJDMttvSdddcMSStWjjWtcSzjs
qfTbNPTVGhGFCVGTwZfNZNNVWvjSczcjStMMcdSczzczvbcW
GZVqffQTwNQTmPRlggHLprHQ
BjsWschcTjjWclQTSnZFrjtFtbzZfqntzF
qggNGMHgvHMRZMtznbrftMCn
qvHdqpwgJTsVccwscT
FJwNPHJmPHTJHglTFwgmwqtShBqDmDBzzBzWhCDWqQ
fpsjNsMVLVjDCCSzBtjztt
sLrdfbsMcbMRZZZbbsfrsrNgGNglRwllRnJnwFvnFHnG
lWWVTJlJCTTzDdWzqdtFFt
PvPvrhbjhgSjvJQSnQRbjZDZFFHMtGGqFtRMGZFtGH
rhPrSgfvJPfmwsTpLcsV`.split('\n')

// const priorities = []
// input.forEach((item) => {
//     priorities.push(getPowerOfDuplicates(item))
// })

const sackGroup = groupByThree(input)
const dups = findCommonItemInThreeSacks(sackGroup)
const total = getValuesOfItem(dups)
console.log(total)

function sum(array) {
    return array.reduce((prev, cur) => prev + cur)
}

function groupByThree(inputArray) {
    let sackGroup = []
    let rucksack = []
    let elfCount = 0

    inputArray.forEach((item) => {
        if (elfCount < 3) {
            rucksack.push(item)
        } else {
            elfCount = 0
            sackGroup.push(rucksack)
            rucksack = []
            rucksack.push(item)
        }
        elfCount++
    })
    sackGroup.push(rucksack)
    return sackGroup
}

function findCommonItemInThreeSacks(sackGroup) {
    let duplicate = ''
    sackGroup.forEach((sack) => {
        for (const char of sack[0]) {
            if (sack[1].includes(char)) {
                if (sack[2].includes(char)) {
                    duplicate += char
                    return
                }
            }
        }
    })
    return duplicate
}

function getValuesOfItem(string) {
    let total = 0
    const powers = []
    for (const char of string) {
        const power = priority.findIndex((element) => element === char)
        powers.push(power + 1)
        total += power + 1
    }
    // return powers.reduce((prev, cur) => prev + cur)
    return total
}

function getPowerOfDuplicates(string) {
    const rucksack = string.split('')
    const compartments = chunkArray(rucksack, 2)
    let duplicate = ''

    for (let i = 0; i <= compartments[0].length; i++) {
        if (compartments[1].some((element) => element === compartments[0][i])) {
            duplicate += compartments[0][i]
        }
    }
    const power = priority.findIndex((element) => {
        return element === duplicate[0]
    })
    return power + 1
}

function chunkArray(arr, n) {
    let chunkLength = Math.max(arr.length / n, 1)
    let chunks = []
    for (let i = 0; i < n; i++) {
        if (chunkLength * (i + 1) <= arr.length)
            chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
    }
    return chunks
}
