//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Consent {
    // Struct for consent records
    struct ConsentRecord {
        string userId;
        string dataType;
        string recipientId;
        uint timestamp;
    }

    // Mapping from userId and recipientId pair to consent record
    mapping(bytes32 => ConsentRecord) public consentRecords;

    // Keccak256 hash of userId and recipientId
    function getConsentKey(string memory userId, string memory recipientId) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(userId, recipientId));
    }

    // Function to give consent
    function giveConsent(string memory userId, string memory dataType, string memory recipientId) public {
        // Create consent record
        ConsentRecord memory consentRecord = ConsentRecord({
            userId: userId,
            dataType: dataType,
            recipientId: recipientId,
            timestamp: block.timestamp
        });

        // Save consent record to mapping
        consentRecords[getConsentKey(userId, recipientId)] = consentRecord;
    }

    // Function to revoke consent
    function revokeConsent(string memory userId, string memory recipientId) public {
        // Delete consent record from mapping
        delete consentRecords[getConsentKey(userId, recipientId)];
    }

    // Function to check if consent has been given
    function checkConsent(string memory userId, string memory recipientId) public view returns (bool) {
        // Check if consent record exists in mapping
        return consentRecords[getConsentKey(userId, recipientId)].timestamp > 0;
    }
}
