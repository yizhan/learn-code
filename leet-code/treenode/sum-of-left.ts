import {TreeNode} from './treenode-interface';

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root: number[]) {
    var treeNode = arrayToTreeNode(root);
    console.log('treeNode', treeNode);

    var magicArray = [];

    if (!root) {
        return 0;
    }

    if (!treeNode.leftLeaf && !treeNode.rightLeaf) {
        return 0;
    }


    looptreeNode(treeNode, magicArray);

    console.log(magicArray)
    return magicArray.reduce((preV, curV, index) => {
        if (index === 1) {
            if (preV && preV.value !== null && preV.leftLeaf && !preV.leftLeaf.leftLeaf && !preV.leftLeaf.rightLeaf) {
                return Number(preV.leftLeaf.value);
            }
        }

        if (curV && curV.value !== null && curV.leftLeaf && !curV.leftLeaf.leftLeaf && !curV.leftLeaf.rightLeaf) {
            if (index === 1) {
                return Number(curV.leftLeaf.value);
            }
            return preV + Number(curV.leftLeaf.value);
        }
        return typeof preV === 'number' ? preV : 0;
    });
};

function looptreeNode(treeNode, magicArray) {
    magicArray.push(treeNode);
    if (treeNode.leftLeaf && treeNode.leftLeaf.value) {
        looptreeNode(treeNode.leftLeaf, magicArray);
    }

    if (treeNode.rightLeaf && treeNode.rightLeaf.value) {
        looptreeNode(treeNode.rightLeaf, magicArray);
    }
}

function arrayToTreeNode (rawArray) {
    var node2d: TreeNode;
    var nodeArray = [];
    rawArray.map((node) => {
        if (!node2d) {
            node2d = {
                value: node,
                leftLeaf: undefined,
                rightLeaf: undefined
            };
            nodeArray.push(node2d);
        } else if (node2d.leftLeaf === undefined) {
            node2d.leftLeaf = {
                value: node,
                leftLeaf: undefined,
                rightLeaf: undefined
            };
            nodeArray.push(node2d.leftLeaf);
        } else if (node2d.rightLeaf === undefined) {
            node2d.rightLeaf = {
                value: node,
                leftLeaf: undefined,
                rightLeaf: undefined
            };
            nodeArray.push(node2d.rightLeaf);
        } else {
            nodeArray.some((rNode) => {
                if (rNode.leftLeaf === undefined) {
                    if (node == null) {
                        rNode.leftLeaf = null;
                        return true;
                    }
                    rNode.leftLeaf = {
                        value: node,
                        leftLeaf: undefined,
                        rightLeaf: undefined
                    }
                    nodeArray.push(rNode.leftLeaf);
                    return true;
                } else if(rNode.rightLeaf === undefined) {
                    if (node == null) {
                        rNode.rightLeaf = null;
                        return true;
                    }
                    rNode.rightLeaf = {
                        value: node,
                        leftLeaf: undefined,
                        rightLeaf: undefined
                    }
                    nodeArray.push(rNode.rightLeaf);
                    return true;
                }
                return false;
            })
        }
    });
    return node2d;
}

var output = sumOfLeftLeaves([3,9,20,null,null,15,7])

console.log(output);
