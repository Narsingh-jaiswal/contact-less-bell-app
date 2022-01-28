const manipulateResponseData = (data, memberData) => {
  const membersStatus = data.membersStatus;
  const manipulatedData = [];

  memberData.forEach((member) => {
    const manipulatedMemberData = member;
    membersStatus.find((status) => {
      if (member.uid === status.id) {
        manipulatedMemberData.status = status;
        console.log({ bcd: manipulatedMemberData });
      }
    });
    console.log({ abc: manipulatedMemberData });
    manipulatedData.push(manipulatedMemberData);
  });

  return manipulatedData;
};

export default manipulateResponseData;
