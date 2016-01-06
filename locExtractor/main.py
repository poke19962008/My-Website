# Extracted data is present at ./loc.json

import os, requests, json

# All the file extensions mapping
fileName = {
    "py": "Python",
    "swift": "Swift",
    "html": "HTML",
    "css": "CSS",
    "js": "JavaScript",
    "h": "C++",
    "cpp": "C++",
    "sh": "Shell",

}

# try_ = 2
data = {}
# doneFile = open('completed.txt', 'a')
for project in os.listdir("data/"):
    for rawFile in open('data/' + project, 'r').read().split("\n")[:-1]:
        # if rawFile not in open('completed.txt', 'r').read().split("\n") and try_ != 1:
        #     continue

        try:
            sourceCode = requests.get(rawFile)
            ext = rawFile.split(".")[-1]
            try:
                ext = fileName[ext]
            except:
                print "[ERROR] Cannot get file extension: " + rawFile.split(".")[-1]
            loc = len(sourceCode.text.split('\n'))

            if data.has_key(ext):
                data[ext] = data[ext] + loc
            else:
                data[ext] = loc

            print "[SUCCESS] GET: " + rawFile
        except:
            print "[ERROR] Cannot GET: " + rawFile
            # doneFile.write(rawFile + "\n")

file_ = open("loc.json", 'w')
file_.write(json.dumps(data, indent=2))
