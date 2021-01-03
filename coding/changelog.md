https://changelog.md/

Changelog.md
In the software industry a changelog, as the name suggests, is a file that logs all the changes made to a specific software program. The reason for creating and keeping a changelog is simple; when a contributor or end-user wants to see if any changes have been made to a software program, they can do that easily and precisely by reading the changelog. All they need to do is go to the changelog and it will show what, and when, any changes were made between the different versions or releases of the particular software.

Changelogs are Vital for Debugging Software and Error Control
For every type of software project, there will be the initial release (version) and, subsequently, newer and better releases that work smoother because they have been de-bugged. Changelogs keep track of these changes. They also help to control errors because they document if, and when, those errors were corrected.

The reasoning behind this is simple; when multiple people are working on a software project, the chance that they are aware of any changes becomes slimmer. With a well-written changelog in place, however, anyone who’s working on the software can see what changes have been made (or not) so they can move forward from there.

Also, the different ideas team members bring about design, standards and compliance can also be addressed through the changelog documentation. In short, a changelog helps teams work together more fluidly and keeps them on the right track, so to speak.

Who Can Benefit from a Changelog?
As mentioned, changelogs help teams develop software better. They can also help end-users who want to know what’s in the software they’re using and if any previous bugs or errors have been deleted. So both developers and end-users can and do benefit from a well-kept changelog.

What Steps Should Be Followed to Create a Well Made Changelog?
While the following principles can change slightly from user to user, they hold true in almost all cases and will help you to create a changelog that’s easy to follow and helpful to all developers and end-users.

Changelogs are made to be read by humans, making legibility vitally important
It should be easy to link any section and any entry for every software version
Each version should have 1 subsection only
All changes that are the same should be grouped together
Releases / new versions should be listed with newest on top (reverse chronological order)
Each new version should have its release date displayed
These dates should follow the ISO standard format YYYY-MM-DD / 2020-01-01
Always mention whether or not Semantic Versioning has been used
What Types of Changes Should be Noted and How to Note Them?
In order to make all changelogs easier to use and read the following changes should be noted in the same manner and grouped together. This will hopefully create a standard that all can use and benefit from in the future. They are, in alphabetical order;

Added – For any new features that have been added since the last version was released
Changed – To note any changes to the software’s existing functionality
Deprecated– To note any features that were once stable but are no longer and have thus been removed
Fixed– Any bugs or errors that have been fixed should be so noted
Removed– This notes any features that have been deleted and removed from the software
Security– This acts as an invitation to users who want to upgrade and avoid any software vulnerabilities
What is the Standard Changelog Format?
As of right now, there isn’t a standard. That being said, the GNU Changelog Style Guide is what many are using.

How should a Changelog File be Named?
There’s no real standard here either. On this point however the consensus is that it should be easy for devs and end-users to find any notable changes. CHANGELOG.md works just fine in this regard although some project heads use HISTORY, NEWS and/or RELEASE to note theirs. HISTORY.txt, RELEASES.txt, NEWS.md, NEWS.txt and others can be used also.

The problem here is that, without a standard, it can get confusing. That’s why many developers stick with CHANGELOG.md and more are using this name every day.

Should a Changelog Ever be Rewritten?
Yes, when necessary. If, for example, a change, fix, deprecation or addition was missed then, by all means, rewrite the changelog to show these changes. The whole purpose of a changelog is to note all of the most important software changes. A missing change would thus make the changelog less valuable.

Should Yanked Releases Be Included in the Changelog?
Yes, definitely. Since yanked releases are versions of the software with significant bug and error issues they should always be noted. Although again not standardized this is a good example of how to display a yanked version. ## 0.0.5 – 2014-12-13 [YANKED]

Can a Changelog be Overused, Excessive or Poorly Kept?
Many experts will answer yes to this question as they believe that changelogs are often overutilized, excessive and poorly kept. Also, oftentimes developers will dump their git logs into a changelog, stuffing it full of useless information that can make it harder to use.

Some are prone to use commit log diffs as changelogs, including merge commits and obscure title commits. These don’t so much show noteworthy changes as they show steps in the source code’s evolution. For that reason, they aren’t nearly as helpful as they might seem.

Oftentimes deprecations aren’t listed in the changelog which makes it more difficult to know when a specific software will reach its breaking point. Also, the format that is used for dating can confuse developers and users. Having a set date format can solve this problem, which is why the ISO standard was created and should be followed regardless of where the developer resides.

There are some who believe that changelogs aren’t even necessary but, in our humble opinion, a well-kept changelog can be a vital part of software project management and give important information to an end-user.

Conclusion
We hope this article has answered all, or at least most, of your questions about changelogs and how to write and use them correctly. The fact is, with few standards, the ‘facts’ about changelogs can and do change from time to time and from team to team.

If you would like to contribute your knowledge, experience and expertise to help create standards or clear up any misunderstandings please do so in the space provided below, and thank you for visiting.
